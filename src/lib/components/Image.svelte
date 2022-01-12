<script lang="ts">
	export let alt: string;
	export let imageData: {
		metadata: { width: number; height: number; src: string };
		jpeg: string;
		webp: string;
	};
	export let className = '';
	export let loading: 'lazy' | 'eager' = 'lazy';
	export let sizes = '(max-width: 768px) 100vw, 768px';

	const { width, height, src } = imageData.metadata;
</script>

<picture class={className}>
	<source srcset={imageData.webp} type="image/webp" {sizes} />
	<source srcset={imageData.jpeg} type="image/jpeg" {sizes} />
	<img {alt} {loading} decoding="async" {width} {height} {src} />
</picture>
