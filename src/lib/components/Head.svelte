<script lang="ts">
	import { page } from '$app/stores';

	import Favicons from './Favicons.svelte';

	export let title: string;
	export let description: string;

	export let index = true;

	export let plausibleDomain: 'sciolyid.org' | 'orni.sciolyid.org' = 'sciolyid.org';

	interface PageImage {
		url: string;
		type: string;
		alt: string;
	}
	export let pageImage: PageImage | undefined = undefined;

	export let canonical: string | undefined = undefined;

	const url = new URL($page.url);
	url.host = 'sciolyid.org';
	url.protocol = 'https:';

	if (!canonical) {
		canonical = url.toString();
	}

	if (!pageImage) {
		pageImage = {
			url: '/logo.png',
			type: 'image/png',
			alt: 'SciOlyID Logo'
		};
	}
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<link rel="canonical" href={canonical} />

	<!-- Allow search engines to crawl certain pages -->
	{#if index === false}
		<meta name="robots" content="none" />
		<meta name="googlebot" content="none" />
	{:else}
		<meta name="robots" content="index, follow" />
		<meta name="googlebot" content="index, follow" />
	{/if}

	<!-- Social cards (twitter, open graph) -->
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:locale" content="en_US" />
	<meta property="og:type" content="website" />
	<meta property="og:url" content={canonical} />

	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:domain" content={url.host} />
	<meta name="twitter:url" content={canonical} />

	{#if pageImage}
		<meta name="twitter:card" content="summary_large_image" />
	{:else}
		<meta name="twitter:card" content="summary" />
	{/if}

	<meta property="og:image" content={pageImage.url} />
	<meta property="og:image:type" content={pageImage.type} />
	<meta property="og:image:alt" content={pageImage.alt} />

	<meta name="twitter:image" content={pageImage.url} />
	<meta name="twitter:image:alt" content={pageImage.alt} />

	<!-- Other assorted tags -->
	<meta name="twitter:dnt" content="on" />
	<meta name="pinterest" content="nopin" />
	<meta name="format-detection" content="telephone=no" />
	<meta name="skype_toolbar" content="skype_toolbar_parser_compatible" />
	<meta http-equiv="x-ua-compatible" content="ie=edge" />

	<Favicons />

	<script defer data-domain={plausibleDomain} src="/owo/script.js" data-api="/owo/event"></script>
</svelte:head>
