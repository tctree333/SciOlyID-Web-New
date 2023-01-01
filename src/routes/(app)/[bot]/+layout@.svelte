<script lang="ts">
	import Notifications from 'svelte-notifications';
	import Modal from 'svelte-simple-modal';
	import { setContext } from 'svelte';
	import Nav from '$lib/components/Nav.svelte';
	import Footer from '$lib/components/Footer.svelte';

	import type { PageData } from './types';
	export let data: PageData;

	$: ({ botUrl } = data);
	setContext('botUrl', botUrl);
</script>

<Modal>
	<Nav />
	<Notifications>
		<slot />
	</Notifications>
	<Footer />
</Modal>
