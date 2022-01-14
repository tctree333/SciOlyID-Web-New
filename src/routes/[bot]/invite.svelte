<script context="module" lang="ts">
	import config from '$lib/config';

	import type { Load } from '@sveltejs/kit';

	export const load: Load = async ({ params }) => {
		return {
			status: 302,
			redirect: config.bots[params.bot].invite
		};
	};
</script>
