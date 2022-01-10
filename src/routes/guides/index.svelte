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
	export let docs: { title: string; description: string; order: number; path: string }[];
</script>

<main class="prose prose-lg md:prose-xl mx-auto px-8 mt-36 mb-24 prose-stone">
	<h1>SciOlyID Guides</h1>
	<nav>
		<ol>
			{#each docs as { title, path }}
				<li>
					<a sveltekit:prefetch href={path}>{title}</a>
				</li>
			{/each}
		</ol>
	</nav>
</main>
