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
</script>

<script lang="ts">
	import { navigating, page } from '$app/stores';

	export let docs: { title: string; description: string; order: number; path: string }[];

	let currentIndex: number;
	let prevPage: {
		title: string;
		description: string;
		order: number;
		path: string;
		name: 'Previous Guide';
	};
	let nextPage: {
		title: string;
		description: string;
		order: number;
		path: string;
		name: 'Next Guide';
	};

	$: {
		currentIndex = docs.findIndex((d) => d.path === $page.url.pathname);
		prevPage =
			currentIndex === 0 || currentIndex === -1
				? null
				: { ...docs[currentIndex - 1], name: 'Previous Guide' };
		nextPage =
			currentIndex === docs.length - 1 || currentIndex === -1
				? null
				: { ...docs[currentIndex + 1], name: 'Next Guide' };
	}

	navigating.subscribe(() => {
		currentIndex = docs.findIndex((d) => d.path === $page.url.pathname);
		prevPage = currentIndex === 0 ? null : { ...docs[currentIndex - 1], name: 'Previous Guide' };
		nextPage =
			currentIndex === docs.length - 1 ? null : { ...docs[currentIndex + 1], name: 'Next Guide' };
	});

	function prevNext(name: string) {
		if (name === 'Next Guide') {
			return `<span>${name.toUpperCase()}</span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" width="20" height="20" class="inline-block mb-0.5"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"/></svg>`;
		} else {
			return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" width="20" height="20" class="inline-block mb-0.5"><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"/></svg><span>${name.toUpperCase()}</span>`;
		}
	}
</script>

<slot />

<div class="flex flex-row justify-between w-full prose-width mx-auto mb-16 px-8">
	{#each [prevPage, nextPage] as adjPage}
		{#if adjPage}
			<a
				href={adjPage.path}
				sveltekit:prefetch
				class="w-[40%] font-bold text-stone-900 underline sm:hidden {adjPage.name === 'Next Guide'
					? 'text-right'
					: 'text-left'}">{@html prevNext(adjPage.name)}</a
			>
			<a href={adjPage.path} sveltekit:prefetch class="hidden w-[40%] sm:block">
				<div
					class="p-4 bg-transparent rounded-lg ring-4 ring-stone-600 group {adjPage.name ===
					'Next Guide'
						? 'text-right'
						: 'text-left'}"
				>
					<div class="mb-3 text-sm font-bold text-stone-500">
						{@html prevNext(adjPage.name)}
					</div>
					<div class="mb-2 text-2xl font-bold text-stone-800 group-hover:underline">
						{adjPage.title}
					</div>
				</div>
			</a>
		{:else}
			<div />
		{/if}
	{/each}
</div>
