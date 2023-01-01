<script lang="ts">
	import config from '$lib/config';
	import { page } from '$app/stores';
	import Head from '$lib/components/Head.svelte';

	import type { PageData } from './$types';
	export let data: PageData;

	let counts = data.counts;
	$: ({ counts } = data);
</script>

<Head
	title="Image Counts: {config.bots[$page.params.bot].botName} | SciOlyID"
	description="View the number of images available for each specimen for {config.bots[
		$page.params.bot
	].eventName}"
/>
<main class="prose-content">
	<h1>
		Image Counts: {config.bots[$page.params.bot].botName}
	</h1>

	<p class="font-medium">Total Images: {counts.total}</p>
	<ul class="my-4 not-prose list-none">
		{#each counts.counts as item}
			{#if item.group}
				<li class="mb-3 font-semibold">
					<span class="text-2xl">{item.name}</span>
					<svg
						class="inline w-6 h-6 text-stone-700 fill-current relative bottom-[0.14rem] right-[0.2rem]"
						width="24"
						height="24"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
					>
						<path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
					</svg>
					<ul class="flex flex-row flex-wrap items-center mb-8 font-normal list-inside item-list">
						{#each item.value as subitem}
							<li class="mr-4 my-2">
								{subitem.name}: <span class="font-medium">{subitem.value}</span>
							</li>
						{/each}
					</ul>
				</li>
			{:else}
				<li>{item.name}: {item.value}</li>
			{/if}
		{/each}
	</ul>
</main>

<style>
	ul.not-prose {
		padding: 0;
	}
</style>
