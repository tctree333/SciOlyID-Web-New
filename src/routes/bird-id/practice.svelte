<script lang="ts">
	import config from '$lib/config';
	import Head from '$lib/components/Head.svelte';
	import { getNotificationsContext } from 'svelte-notifications';
	import type { BirdIDProfile } from '$lib/apiTypes';

	let baseUrl = config.bots['bird-id'].baseUrl;
	const practiceUrls = {
		get: baseUrl + '/practice/get',
		check: baseUrl + '/practice/check',
		skip: baseUrl + '/practice/skip',
		hint: baseUrl + '/practice/hint'
	} as const;

	let statusMessage = '';
	let showOptions = false;
	let loading = true;
	let complete = false;
	let loggedIn = false;
	let answered: {
		guess: string;
		status: 'correct' | 'incorrect';
		answer: string;
		sciname: string;
		wiki: string;
	};

	$: loading = !complete;

	let guess: string = '';

	let stats: { correct: number; total: number; streak: number } = {
		correct: 0,
		total: 0,
		streak: 0
	};
	let personalStats: { correct: number; maxStreak: number; missed: [string, number][] };

	let media: {
		media: 'images' | 'songs';
		bw: boolean;
		addon: '' | 'female' | 'juvenile';
	} = { media: 'images', bw: false, addon: '' };
	let mediaUrl: string;
	$: {
		let url = new URL(practiceUrls.get);
		url.search = new URLSearchParams({
			bw: media.bw ? '1' : '0',
			media: media.media,
			addon: media.addon,
			time: performance.now().toString()
		}).toString();
		mediaUrl = url.toString();
	}

	const { addNotification } = getNotificationsContext();
	function alertUser(
		message: string,
		type: 'success' | 'danger' | 'warning' | 'default' = 'danger'
	) {
		addNotification({
			text: message,
			position: 'bottom-right',
			type,
			removeAfter: 20 * 1000
		});
	}

	function setMedia() {
		loading = true;
		statusMessage = '';
		media = media;
	}

	async function getRequest(urlString: string, params: { [key: string]: string }) {
		const url = new URL(urlString);
		url.search = new URLSearchParams(params).toString();

		const resp = await fetch(url.toString(), {
			method: 'GET',
			credentials: 'include'
		});

		const returnedData = await resp.json();
		if (resp.status === 403) {
			alertUser('Please log in to continue!');
			return false;
		} else if (resp.status === 422) {
			alertUser('An error occurred: ' + returnedData.error);
			setMedia();
			return false;
		} else if (resp.status === 200) {
			return returnedData;
		} else {
			alertUser('Something went wrong...');
			return false;
		}
	}

	function check() {
		if (guess === '') {
			alertUser('Please enter a guess!', 'default');
			return;
		}
		statusMessage = 'Checking...';
		getRequest(practiceUrls.check, { guess: guess }).then((data) => {
			if (!data) {
				return;
			}
			stats.total++;
			answered = data;
			if (data.status === 'correct') {
				stats.correct++;
				stats.streak++;
				updatePersonalStats();
			} else {
				stats.streak = 0;
			}
			stats = stats;
			setMedia();
			guess = '';
		});
	}
	function skip() {
		statusMessage = 'Skipping...';
		getRequest(practiceUrls.skip, {}).then((data) => {
			if (!data) {
				return;
			}
			stats.streak = 0;
			stats.total++;
			stats = stats;
			answered = { status: 'incorrect', ...data };
			setMedia();
		});
	}
	function hint() {
		statusMessage = 'Fetching hint...';
		getRequest(practiceUrls.hint, {}).then((data) => {
			if (!data) {
				return;
			}
			statusMessage = 'The first letter is ' + data.hint;
		});
	}

	function handleEnterKey(event: KeyboardEvent) {
		if (event.key === 'Enter') {
			if (guess === '') {
				setMedia();
			} else {
				check();
			}
		}
	}

	function updatePersonalStats() {
		getRequest(baseUrl + config.apiPaths.profile, {}).then((data: BirdIDProfile) => {
			if (data) {
				loggedIn = true;
				data.missed.sort((a, b) => b[1] - a[1]);
				personalStats = {
					correct: data.score,
					maxStreak: data.max_streak,
					missed: data.missed.filter((bird) => bird[1] > 0)
				};
			}
		});
	}
	updatePersonalStats();
</script>

<Head title="Web Practice: Bird-ID | SciOlyID" description="" />

<main>
	<h1>Web Practice: Bird-ID</h1>

	<div>
		<div>
			{#if answered}
				<p>
					<strong>You were {answered.status}!</strong><br />The correct answer was {answered.answer}
					(<em>{answered.sciname}</em>)
					<a href={answered.wiki} target="_blank" rel="noopener">Wiki</a>
				</p>
			{/if}
			{#if loading}
				<p>Fetching new bird...</p>
			{/if}
			{#if statusMessage}
				<p>{statusMessage}</p>
			{/if}
		</div>
		<div>
			{#if media.media === 'images'}
				<img
					src={mediaUrl}
					alt="Bird to identify"
					on:error={() => {
						loading = false;
						alertUser('Trial Maxed! Log in to continue.');
						media.media = undefined;
						media = media;
					}}
					on:load={() => {
						loading = false;
					}}
				/>
			{:else if media.media === 'songs'}
				<audio
					src={mediaUrl}
					controls
					on:error={() => {
						loading = false;
						alertUser('Trial Maxed! Log in to continue.');
						media.media = undefined;
						media = media;
					}}
					on:canplaythrough={() => {
						loading = false;
					}}>Your browser does not support audio.</audio
				>
			{/if}
		</div>

		<input type="text" bind:value={guess} on:keypress={handleEnterKey} />
		<div>
			<button on:click={check}>Check</button>
			<button on:click={setMedia}> Refresh </button>
			<button on:click={skip}>Skip</button>
			<button on:click={hint}>Hint</button>
			<button
				on:click={() => {
					showOptions = !showOptions;
				}}>Options</button
			>
		</div>
		<div>
			{#if showOptions}
				<form>
					<h2>Options</h2>
					<div>
						<span>Media Type:</span>
						<select
							name="mediaType"
							bind:value={media.media}
							on:change={() => {
								media = media;
							}}
						>
							<option value="images">Images</option>
							<option value="songs">Songs</option>
						</select>
					</div>
					<!--<h4>Black and White (for images)</h4>-->
					{#if media.media === 'images'}
						<div>
							<input type="checkbox" name="bw" bind:checked={media.bw} /> Black and white?
						</div>
						<div>
							<span>Addons:</span>
							<select name="addons" bind:value={media.addon}>
								<option value="">None</option>
								<option value="female">Female</option>
								<option value="juvenile">Juvenile</option>
							</select>
						</div>
					{/if}
				</form>
				<button
					on:click={() => {
						showOptions = false;
					}}>Done!</button
				>
			{/if}
		</div>
	</div>
	<div>
		<h2>Session Stats:</h2>
		<p>
			{stats.correct} Correct Birds ({Math.round((stats.correct / stats.total || 0) * 100)}%)
		</p>
		<p>{stats.total} Total Birds</p>
		<p>{stats.streak} in a row</p>
		<h2>Personal Stats:</h2>
		{#if loggedIn}
			<p>
				{personalStats.correct} Correct Birds
			</p>
			<p>Max Streak: {personalStats.maxStreak}</p>
			<p>Top Missed Birds:</p>
			<ol>
				{#each personalStats.missed as [bird, count]}
					<li>{bird} ({count})</li>
				{/each}
			</ol>
		{:else}
			<p>Log in to save your score and view full stats!</p>
		{/if}
	</div>
</main>
