<script lang="ts">
	import Head from '$lib/components/Head.svelte';
	import MarkdownIt from 'markdown-it';
	const md = new MarkdownIt();

	import type { PageData } from './types';
	export let data: PageData;

	$: ({ attribution } = data);

	const renderedAttribs = Object.values(attribution).map((attrib) => md.renderInline(attrib));
</script>

<Head
	title="Image Attributions: Minerobo | SciOlyID"
	description="Image credits and attribution for Rocks and Minerals"
/>
<main class="prose-content">
	<h1>Image Attributions: Minerobo</h1>

	<ul>
		<li>
			Images from <a href="https://www.minerals.net">Minerals.net</a> are licensed for educational use.
		</li>
		{#each renderedAttribs as attrib}
			<li>{@html attrib}</li>
		{/each}
	</ul>
</main>
