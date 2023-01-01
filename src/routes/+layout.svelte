<script>
	import '../app.css';
	import Modal from 'svelte-simple-modal';
	import Footer from '$lib/components/Footer.svelte';
	import Nav from '$lib/components/Nav.svelte';
</script>

<Modal>
	<Nav />
	<slot />
	<Footer />
</Modal>
