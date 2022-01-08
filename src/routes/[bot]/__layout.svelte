<script context="module" lang="ts">
	import config from '$lib/config';

	import type { Load } from '@sveltejs/kit';

	export const load: Load = async ({ params }) => {
		if (Object.keys(config.bots).includes(params.bot)) {
			return {
				status: 200
			};
		} else {
			return {
				status: 404,
				error: 'Not found'
			};
		}
	};
</script>

<slot />
