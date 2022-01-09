<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';

	export const load: Load = async () => {
		const modules = import.meta.glob('./*.md');
		const docs = await Promise.all(
			Object.entries(modules).map(async ([filename, module]) => {
				const { metadata } = await module();
				return { path: '/guides/' + filename.substring(2, filename.length - 3), ...metadata };
			})
		);
		docs.sort((a, b) => a.order - b.order);
		console.log(docs);
		return {
			props: {
				docs
			}
		};
	};
</script>

<script lang="ts">
	export let docs: { title: string; description: string; order: number; path: string }[];
</script>

<nav>
	<ol>
		{#each docs as { title, path }}
			<li>
				<a sveltekit:prefetch href={path}>{title}</a>
			</li>
		{/each}
	</ol>
</nav>

<slot />
