<script>
	import Head from '$lib/components/Head.svelte';

	export let title;
	export let description;
</script>

<Head {title} {description} />

<slot />
