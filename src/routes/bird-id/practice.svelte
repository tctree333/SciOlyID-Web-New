<script lang="ts">
	import config from '$lib/config';
	import Head from '$lib/components/Head.svelte';
	import { getNotificationsContext } from 'svelte-notifications';
	import type { BirdIDProfile } from '$lib/apiTypes';
	import { browser } from '$app/env';

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
			time: browser ? performance.now().toString() : '0'
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

	async function getRequest(
		urlString: string,
		params: { [key: string]: string },
		notifications = true
	) {
		const url = new URL(urlString);
		url.search = new URLSearchParams(params).toString();

		const resp = await fetch(url.toString(), {
			method: 'GET',
			credentials: 'include'
		});

		const returnedData = await resp.json();
		if (resp.status === 403) {
			if (notifications) alertUser('Please log in to continue!');
			return false;
		} else if (resp.status === 422) {
			if (notifications) alertUser('An error occurred: ' + returnedData.error);
			setMedia();
			return false;
		} else if (resp.status === 200) {
			return returnedData;
		} else {
			if (notifications) alertUser('Something went wrong...');
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
		getRequest(baseUrl + config.apiPaths.profile, {}, false).then((data: BirdIDProfile) => {
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

<Head
	title="Web Practice: Bird-ID | SciOlyID"
	description="The web interface for Bird-ID."
	plausibleDomain="orni.sciolyid.org"
/>

<main class="prose-content max-w-none">
	<h1 class="text-center mb-4">Web Practice: Bird-ID</h1>
	<p class="text-center">
		<a href="/guides/web-practice/">Learn more about our web practice interface.</a>
	</p>
	<div class="not-prose flex flex-wrap px-5 mb-48 max-w-full">
		<div class="flex-1 max-w-full">
			<div class="h-24 max-w-full mx-auto w-[720px] leading-snug space-y-2">
				{#if answered}
					<p>
						<strong>You were {answered.status}!</strong><br />The correct answer was {answered.answer}
						<em>({answered.sciname})</em>.
						<a class="underline" href={answered.wiki} target="_blank" rel="noopener">Wiki</a>
					</p>
				{/if}
				{#if loading}
					<p>Fetching new bird...</p>
				{/if}
				{#if statusMessage}
					<p>{statusMessage}</p>
				{/if}
			</div>
			<div class="h-[50vh] grid place-items-center">
				{#if media.media === 'images'}
					<img
						class="w-auto max-w-full max-h-[48vh] block border-2 border-slate-500"
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
			<label for="guess" class="sr-only">Your answer</label>
			<input
				type="text"
				id="guess"
				bind:value={guess}
				on:keypress={handleEnterKey}
				class="block max-w-full w-[720px] text-2xl p-3 my-4 mx-auto rounded-md bg-transparent border-2 border-stone-500"
			/>
			<div class="flex w-full justify-center items-center flex-wrap space-x-4">
				<button class="btn my-2" on:click={check}>Check</button>
				<button class="btn my-2" on:click={setMedia}> Refresh </button>
				<button class="btn my-2" on:click={skip}>Skip</button>
				<button class="btn my-2" on:click={hint}>Hint</button>
				<button
					class="btn my-2"
					on:click={() => {
						showOptions = !showOptions;
					}}>Options</button
				>
			</div>

			{#if showOptions}
				<form
					class="mx-auto text-lg ring-2 ring-stone-700 max-w-fit rounded-md p-6 mt-12 space-y-2"
				>
					<h2 class="text-xl font-medium">Options</h2>
					<div>
						<span>Media Type:</span>
						<select
							name="mediaType"
							class="rounded bg-transparent py-1 pl-2 pr-8"
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
							<input
								type="checkbox"
								name="bw"
								bind:checked={media.bw}
								class="rounded bg-transparent w-6 h-6 align-text-top"
							/> Black and white?
						</div>
						<div>
							<span>Addons:</span>
							<select
								name="addons"
								bind:value={media.addon}
								class="rounded bg-transparent py-1 pl-2 pr-8"
							>
								<option value="">None</option>
								<option value="female">Female</option>
								<option value="juvenile">Juvenile</option>
							</select>
						</div>
					{/if}
					<button
						class="btn"
						on:click={() => {
							showOptions = false;
						}}>Done!</button
					>
				</form>
			{/if}
		</div>
		<div class="text-xl mt-32 min-w-fit w-[30vw] space-y-3">
			<h2 class="text-2xl font-medium">Session Stats:</h2>
			<p>
				{stats.correct} Correct Birds ({Math.round((stats.correct / stats.total || 0) * 100)}%)
			</p>
			<p>{stats.total} Total Birds</p>
			<p>{stats.streak} in a row</p>
			<h2 class="text-2xl pt-8 font-medium">Personal Stats:</h2>
			{#if loggedIn}
				<p>
					{personalStats.correct} Correct Birds
				</p>
				<p>Max Streak: {personalStats.maxStreak}</p>
				<p>Top Missed Birds:</p>
				<ol class="list-decimal text-lg pl-6">
					{#each personalStats.missed as [bird, count]}
						<li>{bird} ({count})</li>
					{/each}
				</ol>
			{:else}
				<p>Log in to save your score and view full stats!</p>
			{/if}
		</div>
	</div>
</main>
