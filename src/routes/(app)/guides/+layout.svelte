<script lang="ts">
	import { navigating, page } from '$app/stores';

	import type { PageData } from './$types';
	export let data: PageData;

	let docs = data.docs;
	$: ({ docs } = data);

	let currentIndex: number;

	let previous = 'Previous' as const;
	let next = 'Next' as const;
	let prevPage: {
		title: string;
		description: string;
		order: number;
		path: string;
		name: typeof previous;
	};
	let nextPage: {
		title: string;
		description: string;
		order: number;
		path: string;
		name: typeof next;
	};

	$: {
		currentIndex = docs.findIndex((d) => d.path === $page.url.pathname);
		prevPage =
			currentIndex === 0 || currentIndex === -1
				? null
				: { ...docs[currentIndex - 1], name: previous };
		nextPage =
			currentIndex === docs.length - 1 || currentIndex === -1
				? null
				: { ...docs[currentIndex + 1], name: next };
	}

	navigating.subscribe(() => {
		currentIndex = docs.findIndex((d) => d.path === $page.url.pathname);
		prevPage = currentIndex === 0 ? null : { ...docs[currentIndex - 1], name: previous };
		nextPage = currentIndex === docs.length - 1 ? null : { ...docs[currentIndex + 1], name: next };
	});

	function prevNext(name: string) {
		if (name === next) {
			return `<span>${name.toUpperCase()}</span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" width="20" height="20" class="inline-block mb-0.5"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"/></svg>`;
		} else {
			return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" width="20" height="20" class="inline-block mb-0.5"><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"/></svg><span>${name.toUpperCase()}</span>`;
		}
	}
</script>

<slot />

{#if $page.url.pathname !== '/guides/'}
	<div
		data-sveltekit-preload-data="hover"
		class="flex flex-row justify-between w-full prose-width mx-auto mb-16 px-8"
	>
		{#each [prevPage, nextPage] as adjPage}
			{#if adjPage}
				<a
					href={adjPage.path}
					class="w-[40%] font-bold text-stone-900 underline sm:hidden {adjPage.name === next
						? 'text-right'
						: 'text-left'}">{@html prevNext(adjPage.name)}</a
				>
				<a href={adjPage.path} class="hidden w-[40%] sm:block">
					<div
						class="p-4 bg-transparent rounded-lg ring-4 ring-stone-600 group {adjPage.name === next
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
{/if}
