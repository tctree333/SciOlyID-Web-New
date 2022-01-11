<script>
	import FooterBird from './svg/FooterBird.svelte';
</script>

<FooterBird />
<footer class="text-stone-100 bg-stone-800">
	<div class="flex items-center justify-center w-full py-12 text-lg">
		<p>SciOlyID</p>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 980 980"
			width="24"
			height="24"
			class="inline-block w-4 h-4 mx-2 fill-current"
			><circle
				cx="490"
				cy="490"
				r="440"
				fill="none"
				stroke="currentColor"
				stroke-width="100"
			/><path d="M219,428H350a150,150 0 1 1 0,125H219a275,275 0 1 0 0-125z" /></svg
		>
		<p>2020-{new Date().getFullYear()}</p>
	</div>
</footer>
