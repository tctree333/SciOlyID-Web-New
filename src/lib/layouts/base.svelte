<script>
	import Head from '$lib/components/Head.svelte';
	import '$lib/prism-themes/prism-shades-of-purple.css';

	export let title;
	export let description;
</script>

<Head {title} {description} />

<main class="prose prose-lg md:prose-xl mx-auto px-8 mt-36 mb-24 prose-stone">
	<slot />
</main>
