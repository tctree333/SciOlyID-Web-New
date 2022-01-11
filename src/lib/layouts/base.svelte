<script>
	import Head from '$lib/components/Head.svelte';
	import '$lib/prism-themes/prism-shades-of-purple.css';

	export let title;
	export let description;
</script>

<Head {title} {description} />

<div class="overflow-x-hidden w-full mb-24">
	<main class="prose-content mb-0 relative">
		<slot />
	</main>
</div>
