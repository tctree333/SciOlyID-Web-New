<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';

	export const load: Load = async () => {
		const modules = import.meta.glob('./*.md');
		const docs = await Promise.all(
			Object.entries(modules).map(async ([filename, module]) => {
				const { metadata } = await module();
				return { path: '/guides/' + filename.substring(2, filename.length - 3) + '/', ...metadata };
			})
		);
		docs.sort((a, b) => a.order - b.order);
		return {
			props: {
				docs
			}
		};
	};

	export const prerender = true;
</script>

<script lang="ts">
	import Head from '$lib/components/Head.svelte';

	export let docs: { title: string; description: string; order: number; path: string }[];
</script>

<Head
	title="SciOlyID Guides"
	description="Welcome to SciOlyID! These guides will walk you through getting started with the bots and the
various available features."
/>

<main class="prose-content">
	<h1>SciOlyID Guides</h1>
	<p>
		Welcome to SciOlyID! These guides will walk you through getting started with the bots and the
		various available features. You can follow them in order if you’re entirely new, or you can skip
		around to different sections.
	</p>
	<p>
		If you’ve never used Discord before, you may want to start with <a
			href="/guides/new-to-discord/">“Using Discord”</a
		>. If you’ve used Discord but are new to SciOlyID, start with
		<a href="/guides/getting-started/">“Getting Started”</a>.
	</p>
	<nav>
		<ol>
			{#each docs as { title, path, description }}
				<li>
					<a sveltekit:prefetch href={path}>{title}</a>
					<div>{description}</div>
				</li>
			{/each}
		</ol>
	</nav>
</main>
