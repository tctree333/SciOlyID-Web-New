<script lang="ts">
	import { navigating } from '$app/stores';
	import { tweened } from 'svelte/motion';

	export let title: string;

	let show = false;

	let menuId = 'navMenu-' + Math.round(Math.random() * 1000);
	let listId = 'navMenu-sub-' + Math.round(Math.random() * 1000);

	const opacity = tweened(0, { duration: 200 });

	$: {
		show ? ($opacity = 1) : ($opacity = 0);
	}

	navigating.subscribe(() => {
		show = false;
	});
</script>

<svelte:body
	on:click={(ev) => {
		if (show && !ev.target.closest('#' + menuId)) show = false;
	}} />

<span id={menuId}>
	<button
		class="hidden md:block"
		on:click={() => {
			show = !show;
		}}
		aria-expanded={show}
		aria-controls={listId}>{title}</button
	>
	<span class="block no-underline md:hidden">{title}</span>
	<ul
		id={listId}
		style="--opacity: {$opacity};"
		class="md:list-none list-disc ml-8 md:ml-0 space-y-1 underline {show
			? 'md:block'
			: 'md:hidden'} md:absolute md:bg-stone-200 md:mt-2 md:p-4 md:rounded-md opacity-100"
	>
		<slot />
	</ul>
</span>

<style>
	@media (min-width: 768px) {
		ul {
			opacity: var(--opacity);
		}
	}
</style>
