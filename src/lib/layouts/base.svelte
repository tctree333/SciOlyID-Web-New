<script>
	import Head from '$lib/components/Head.svelte';
	import '$lib/prism-themes/prism-shades-of-purple.css';

	export let title;
	export let description;
</script>

<Head {title} {description} />

<div class="prose-content overflow-x-hidden w-full">
	<main class="relative">
		<slot />
	</main>
</div>
