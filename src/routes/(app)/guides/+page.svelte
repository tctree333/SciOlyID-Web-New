<script lang="ts">
	import Head from '$lib/components/Head.svelte';

	import type { PageData } from './types';
	export let data: PageData;

	$: ({ docs } = data);
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
