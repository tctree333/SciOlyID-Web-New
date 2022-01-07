<script context="module" lang="ts">
	import type { ErrorLoad } from '@sveltejs/kit';

	export const load: ErrorLoad = ({ error, status }) => {
		return {
			props: {
				title: `${status}: ${error.message}`,
				...error
			}
		};
	};
</script>

<script lang="ts">
	export let title: string;
	export let stack: string;
	export let name: string;
</script>

<h1>{title}</h1>
<h2>{name}</h2>
<pre>{stack}</pre>
