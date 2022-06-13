<script context="module" lang="ts">
	import config from '$lib/config';

	import type { Load } from '@sveltejs/kit';

	export const load: Load = async ({ url, params }) => {
		if (
			Object.keys(config.bots).includes(params.bot) &&
			Object.keys(config.sitePaths).includes(url.pathname.split('/')[2]) &&
			config.bots[params.bot][url.pathname.split('/')[2]]
		) {
			return {
				status: 200,
				props: { botUrl: config.bots[params.bot].baseUrl }
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
	import Modal from 'svelte-simple-modal';
	import { setContext } from 'svelte';
	import Nav from '$lib/components/Nav.svelte';
	import Footer from '$lib/components/Footer.svelte';

	export let botUrl: string;
	setContext('botUrl', botUrl);
</script>

<Modal>
	<Nav />
	<Notifications>
		<slot />
	</Notifications>
	<Footer />
</Modal>
