<script lang="ts">
	import Head from '$lib/components/Head.svelte';
	import Image from '$lib/components/Image.svelte';
	import { page } from '$app/stores';

	import metadata from '$lib/images/red-panda.jpg?metadata';
	import jpeg from '$lib/images/red-panda.jpg?w=350;450;700;900;1050;1350;1800;2000&jpeg&srcset';
	import webp from '$lib/images/red-panda.jpg?w=350;450;700;900;1050;1350;1800;2000&webp&srcset';

	$: title = `${$page.status}: ${$page.error.message}`
</script>

<Head {title} description="An error occurred." index={false} />

<main class="prose-content">
	<h1>{title}</h1>
	<p>
		An error occurred. If this was unexpected, you may want to report this in our <a href="/server/"
			>support server</a
		>. Otherwise, you might want to <a href="/">go back to the homepage</a>.
	</p>
	<Image
		alt="a very cute red panda hanging out on a tree branch. its fluffy tail is in view"
		imgClass="rounded-lg"
		imageData={{ metadata, jpeg, webp }}
		loading="lazy"
	/>
</main>
