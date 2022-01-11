<script context="module" lang="ts">
	import config from '$lib/config';
	import type { Load } from '@sveltejs/kit';

	const verifyUrls = {
		getImage: '/verify/',
		confirm: '/verify/confirm',
		stats: '/verify/stats'
	} as const;

	export const load: Load = async ({ params }) => {
		return { props: { baseUrl: config.bots[params.bot].baseUrl } };
	};
</script>

<script lang="ts">
	import { page } from '$app/stores';
	import Head from '$lib/components/Head.svelte';
	import { getNotificationsContext } from 'svelte-notifications';
	import type { VerifyItem, VerifyItemMore, VerifyStats } from '$lib/apiTypes';
	import { browser } from '$app/env';

	const { addNotification } = getNotificationsContext();

	function alertUser(message: string, type: 'success' | 'danger' | 'warning' = 'danger') {
		addNotification({
			text: message,
			position: 'bottom-right',
			type,
			removeAfter: 20 * 1000
		});
	}

	export let baseUrl: string;

	let item: VerifyItemMore;
	let stats: VerifyStats;

	let loading = true;
	let hidden = false;

	function offset(set: number = undefined): number {
		if (!browser) {
			return 0;
		}
		if (set === undefined) {
			return parseInt(localStorage.getItem('offset') ?? '0');
		}
		localStorage.setItem('offset', set.toString());
		return set;
	}

	function updateImage(_offset: number = undefined) {
		loading = true;

		if (_offset === undefined) {
			_offset = offset() + 1;
		}

		getRequest(baseUrl + verifyUrls.getImage, { offset: _offset.toString() }).then(
			(data: VerifyItem) => {
				if (!data) {
					return;
				}
				if (data.end === true) {
					alertUser("You've seen all of the images!");
					hidden = true;
					return;
				}
				offset(data.offset);

				item = data;
				loading = false;

				getRequest(baseUrl + verifyUrls.stats, {
					id: item.id
				}).then((data) => {
					if (!data) {
						return;
					}
					stats = data;
				});
			}
		);
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
			hidden = true;
		} else if (resp.status === 400) {
			alertUser('An error occurred: ' + returnedData.error);
			return false;
		} else if (resp.status === 200) {
			return returnedData;
		} else {
			alertUser('Something went wrong...');
			return false;
		}
	}

	function genValidation(confirmation: string) {
		return () => {
			postValidation({ confirmation, id: item.id }).then(() => {
				updateImage();
			});
		};
	}

	async function postValidation(data: Record<string, string>) {
		const resp = await fetch(baseUrl + verifyUrls.confirm, {
			method: 'POST',
			credentials: 'include',
			body: new URLSearchParams(data)
		});

		const returnedData = await resp.json();
		if (resp.status === 403) {
			alertUser('Please log in to continue!');
			hidden = true;
		} else if (resp.status === 400) {
			alertUser(returnedData.error);
		} else if (resp.status === 200 && returnedData.success) {
			alertUser('Ok!', 'success');
		} else {
			alertUser('Something went wrong...');
		}
	}

	updateImage();
</script>

<Head
	title="Verify Images: {config.bots[$page.params.bot].botName} | SciOlyID"
	description="Verify {config.bots[$page.params.bot]
		.eventName} images to ensure image quality and accuracy."
/>

<main class="main">
	<div class="prose-content">
		<h1 class="text-center">
			Verify Images: {config.bots[$page.params.bot].botName}
		</h1>
	</div>

	{#if !hidden}
		<div class="container max-w-4xl px-5 py-4 mx-auto mb-4 sm:px-8">
			<p class="text-xl">
				Is this an image of <span class="font-semibold">{loading ? '...' : item.item}</span>?
			</p>
			<div class="flex items-center justify-between mt-4 mb-2">
				<p class="font-semibold">
					Image ID: <span class="font-normal">{loading ? '...' : item.id.slice(0, 7)}</span>
				</p>
				<div class="flex items-center justify-end">
					<p class="px-2 mr-2 text-green-900 bg-green-300 rounded-full">
						{loading ? 0 : stats.valid}
					</p>
					<p class="px-2 mr-2 text-yellow-900 bg-yellow-300 rounded-full">
						{loading ? 0 : stats.duplicate}
					</p>
					<p class="px-2 mr-2 text-red-900 bg-red-300 rounded-full">
						{loading ? 0 : stats.invalid}
					</p>
				</div>
			</div>
			<div>
				<div class="p-4 py-8 my-4 bg-neutral-200 rounded">
					<img
						src={loading ? '/illustrations/loading.svg' : baseUrl + item.url}
						class="mx-auto rounded max-h-72"
						alt="possible specimen"
					/>
				</div>

				{#if !loading && item.duplicates}
					<div
						class="p-4 pt-2 mx-auto my-4 mb-2 bg-orange-200 border-t-4 border-yellow-700 rounded"
					>
						<p class="mt-4 mb-6 text-2xl font-medium">Possible Duplicates:</p>
						{#each item.duplicates as duplicate}
							<img
								class="mx-auto mt-2 mb-4 rounded max-h-72 block"
								src={duplicate}
								alt="a possible duplicate"
							/>
						{/each}
					</div>
				{/if}
			</div>

			<div class="flex flex-wrap items-center justify-center space-x-4 text-lg mt-8">
				<button
					class="btn btn-gray"
					on:click={() => {
						updateImage(offset() - 1);
					}}
					disabled={loading}>Back</button
				>
				<button
					class="btn btn-green"
					on:click={() => {
						genValidation('valid');
					}}
					disabled={loading}>Valid</button
				>
				<button
					class="btn btn-yellow"
					on:click={() => {
						genValidation('duplicate');
					}}
					disabled={loading}>Duplicate</button
				>
				<button
					class="btn btn-red"
					on:click={() => {
						genValidation('invalid');
					}}
					disabled={loading}>Invalid</button
				>
				<button
					class="btn btn-gray"
					on:click={() => {
						updateImage();
					}}
					disabled={loading}>Skip</button
				>
			</div>
		</div>
	{:else}
		<p class="text-center text-2xl font-semibold">No images to verify!</p>
	{/if}

	<div
		class="container max-w-4xl p-5 mx-auto my-16 ring-4 ring-stone-400 rounded shadow-sm sm:px-8"
	>
		<div class="max-w-3xl mx-auto">
			<p class="mb-3 text-xl font-medium">
				Help maintain the quality of images used by the bot by verifying user-uploaded images.
			</p>
			<div class="mb-3">
				<p class="mb-3 font-semibold">You can mark an image as:</p>
				<ul class="ml-2 leading-relaxed list-disc list-inside">
					<li class="mb-2">
						<span class="p-1 px-2 font-medium text-green-900 bg-green-300 rounded-lg">Valid</span> -
						The object to be identified is clearly visible and is of the correct item. Text revealing
						the answer is not visible. The image is not a duplicate of an already existing image.
					</li>
					<li class="mb-2">
						<span class="p-1 px-2 font-medium text-yellow-900 bg-yellow-300 rounded-lg"
							>Duplicate</span
						> - The image is a duplicate of an already existing image. You will be presented with likely
						duplicates by the bot if they exist; only mark as duplicate if they are the same image.
					</li>
					<li class="mb-2">
						<span class="p-1 px-2 font-medium text-red-900 bg-red-300 rounded-lg">Invalid</span> - The
						object to be identified is not clearly visible or is incorrect, or spoiler text is visible.
						If a person is prominently featured or identifiable, also mark that as invalid.
					</li>
				</ul>
			</div>
			<p>
				Verification counts are checked every 15 minutes. If an image has at least 3 votes for
				invalid or duplicate, the image is discarded, otherwise if there are at least 3 votes for
				valid, then it will be added to the bot.
			</p>
		</div>
	</div>
</main>
