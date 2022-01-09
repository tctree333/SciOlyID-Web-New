<script context="module" lang="ts">
	import config from '$lib/config';
	import type { Load } from '@sveltejs/kit';

	export const load: Load = async ({ params, fetch }) => {
		const url = config.bots[params.bot].baseUrl + config.apiPaths.counts;
		const res = await fetch(url);

		if (res.ok) {
			return {
				props: { counts: await res.json() }
			};
		} else {
			return {
				status: res.status,
				error: new Error(`Could not load ${url}: ${res.status} ${res.statusText}`)
			};
		}
	};

	export const prerender = true;
</script>

<script lang="ts">
	import { page } from '$app/stores';
	import type { BotMediaCounts } from '$lib/apiTypes';
	import Head from '$lib/components/Head.svelte';

	export let counts: BotMediaCounts;
</script>

<Head
	title="Image Counts: {config.bots[$page.params.bot].botName} | SciOlyID"
	description="View the number of images available for each specimen for {config.bots[
		$page.params.bot
	].eventName}"
/>

<h1>
	Image Counts: {config.bots[$page.params.bot].botName}
</h1>

<p>Total Images: {counts.total}</p>
<ul>
	{#each counts.counts as item}
		{#if item.group}
			<li>
				<span>{item.name}</span>
				<ul>
					{#each item.value as subitem}
						<li>{subitem.name}: {subitem.value}</li>
					{/each}
				</ul>
			</li>
		{:else}
			<li>{item.name}: {item.value}</li>
		{/if}
	{/each}
</ul>
