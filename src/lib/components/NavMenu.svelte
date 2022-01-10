<script lang="ts">
	import { tweened } from 'svelte/motion';

	export let title: string;

	let show = false;

	let id = 'navMenu-' + Math.round(Math.random() * 1000);

	const opacity = tweened(0, { duration: 200 });

	$: {
		show ? ($opacity = 1) : ($opacity = 0);
	}
</script>

<svelte:body
	on:click={(ev) => {
		if (show && !ev.target.closest('#' + id)) show = false;
	}} />

<span {id} class="group">
	<button
		class="hidden md:block"
		on:click={() => {
			show = !show;
		}}>{title}</button
	>
	<span class="block no-underline md:hidden">{title}</span>
	<ul
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
