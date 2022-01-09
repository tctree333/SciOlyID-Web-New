<script context="module" lang="ts">
	import config from '$lib/config';

	import type { Load } from '@sveltejs/kit';

	export const load: Load = async ({ url, params }) => {
		if (
			Object.keys(config.bots).includes(params.bot) &&
			config.sitePaths.includes(url.pathname.split('/')[2]) &&
			config.bots[params.bot][url.pathname.split('/')[2]]
		) {
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

<script lang="ts">
	import Notifications from 'svelte-notifications';
</script>

<Notifications>
	<slot />
</Notifications>
