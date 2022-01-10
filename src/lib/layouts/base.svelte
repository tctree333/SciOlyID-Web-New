<script>
	import Head from '$lib/components/Head.svelte';
	import '$lib/prism-themes/prism-shades-of-purple.css';

	export let title;
	export let description;
</script>

<Head {title} {description} />

<main class="prose-content">
	<slot />
</main>
