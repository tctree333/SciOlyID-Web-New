<script lang="ts">
	throw new Error("@migration task: Add data prop (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292707)");

	import Head from '$lib/components/Head.svelte';
	import MarkdownIt from 'markdown-it';
	const md = new MarkdownIt();

	export let attribution: { [hash: string]: string };

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
