<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';

	export const load: Load = async ({ fetch }) => {
		const url =
			'https://raw.githubusercontent.com/tctree333/Minerobo/main/image_attributions.json';
		if (!url) return { status: 404, message: 'Not found' };

		const res = await fetch(url);

		if (res.ok) {
			return {
				props: { attribution: await res.json() }
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
