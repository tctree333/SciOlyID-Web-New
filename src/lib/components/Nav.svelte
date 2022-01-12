<script lang="ts">
	import { browser } from '$app/env';
	import { navigating } from '$app/stores';

	import config from '$lib/config';
	import NavMenu from './NavMenu.svelte';
	import UserButton from './UserButton.svelte';

	let showMenu = false;

	$: {
		if (browser) {
			if (showMenu) {
				document.body.classList.add('overflow-hidden', 'h-full');
			} else {
				document.body.classList.remove('overflow-hidden', 'h-full');
			}
		}
	}

	navigating.subscribe(() => {
		showMenu = false;
	});
</script>

<svelte:body
	on:keypress={(ev) => {
		if (ev.key === 'Escape') {
			showMenu = false;
		}
	}} />

<nav
	class="lg:px-12 lg:py-8 py-6 px-8 text-lg lg:text-xl fixed top-0 inset-x-0 bg-stone-100 bg-opacity-90 isolate z-50 w-screen"
	class:opened={showMenu}
>
	<div class="flex justify-between max-w-7xl mx-auto items-center">
		<button
			aria-hidden="true"
			class="block md:hidden z-10 md:z-auto"
			on:click={() => {
				showMenu = !showMenu;
			}}
		>
			{#if showMenu}<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M6 18L18 6M6 6l12 12"
					/>
				</svg>{:else}<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h16M4 18h16"
					/>
				</svg>{/if}</button
		>
		<a sveltekit:prefetch href="/" class="text-3xl md:z-auto z-10 font-semibold">SciOlyID</a>
		<span
			class="links flex md:space-x-4 lg:space-x-8 space-y-4 md:space-y-0 md:z-auto z-0 underline md:bg-transparent bg-stone-100"
		>
			<a sveltekit:prefetch href="/about/">About</a>
			<a sveltekit:prefetch href="/guides/">Guides</a>
			{#each Object.entries(config.bots) as [id, bot]}
				<NavMenu title={bot.eventName}>
					{#each Object.entries(config.sitePaths) as [path, info]}
						{#if bot[path]}
							<li>
								<a sveltekit:prefetch href="/{id}/{path}/">{info.name}</a>
							</li>
						{/if}
					{/each}
				</NavMenu>
			{/each}
		</span>
		<span class="md:z-auto z-10">
			<UserButton />
		</span>
	</div>
</nav>

<style lang="postcss">
	/* based on https://bholmes.dev/blog/building-a-sexy-mobile-ready-navbar-in-any-web-framework/ */
	@media (max-width: 767.9px) {
		/* arbitrary breakpoint, around the size of a tablet */
		.links {
			/* first, make our dropdown cover the screen */
			position: fixed;
			top: 0;
			left: 0;
			right: 0;
			height: 100vh;
			/* fix nav height on mobile safari, where 100vh is a little off */
			height: -webkit-fill-available;

			/* then, arrange our links top to bottom */
			flex-direction: column;
			justify-content: center;
			align-items: flex-start;

			/* add margins and padding to taste */
			margin: 0;
			padding-left: 7vw;
			padding-right: 7vw;

			opacity: 0; /* fade out */
			transform: translateY(-100%); /* move out of view */
			transition: transform 0.2s, opacity 0.2s; /* transition these smoothly */

			--tw-bg-opacity: 0.97;
		}

		@supports (backdrop-filter: blur(5px)) {
			.links {
				backdrop-filter: blur(5px);
				--tw-bg-opacity: 0.85;
			}
		}

		nav.opened .links {
			opacity: 1; /* fade in */
			transform: translateY(0); /* move into view */
		}
	}
</style>
