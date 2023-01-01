<script lang="ts">
	import { browser } from '$app/environment';
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
	}}
/>

<nav
	class="lg:px-12 lg:py-8 py-6 px-8 text-lg lg:text-xl fixed top-0 inset-x-0 bg-stone-100 bg-opacity-90 isolate z-50 w-screen"
	class:opened={showMenu}
	data-sveltekit-preload-data="hover"
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
		<a href="/" class="text-3xl md:z-auto z-10 font-semibold flex items-center"
			><svg
				version="1.1"
				xmlns="http://www.w3.org/2000/svg"
				xmlns:xlink="http://www.w3.org/1999/xlink"
				width="260.92868"
				height="177.44964"
				viewBox="0,0,260.92868,177.44964"
				class="h-8 w-auto hidden mr-3 sm:inline"
				><title>Logo</title><g transform="translate(-108.2639,-83.61409)"
					><g
						fill="none"
						fill-rule="nonzero"
						stroke="#000000"
						stroke-linejoin="miter"
						stroke-miterlimit="10"
						stroke-dasharray=""
						stroke-dashoffset="0"
						style="mix-blend-mode: normal"
						><path
							d="M208.87627,249.90641c0,0 4.79128,-7.63871 44.44709,-73.00155c31.68716,-52.22849 35.22091,-66.74584 57.16945,-66.55905c18.44609,-0.1264 48.71698,39.57996 48.69977,39.88381c-0.05725,1.0108 -23.21408,4.47195 -23.66278,5.16628c-0.40733,0.63033 12.37953,57.94063 0.19614,75.71781c-16.91035,24.67443 -60.67568,19.95002 -60.67568,19.95002"
							stroke-width="20"
							stroke-linecap="round"
						/><path
							d="M140.7874,249.48836l-21.13686,-35.09316l35.22123,-71.37247l35.34452,71.21103l-21.20043,35.3157"
							stroke-width="20"
							stroke-linecap="round"
						/><path
							d="M189.03533,92.4344l18.00426,-0.05687l13.67502,17.40591c0,0 -4.18488,8.43626 -6.96759,14.04591c-4.15791,8.3819 -15.55594,32.05521 -15.55594,32.05521l-22.70032,-45.88355z"
							stroke-width="17.5"
							stroke-linecap="butt"
						/></g
					></g
				></svg
			>SciOlyID</a
		>
		<span
			class="links flex md:space-x-4 lg:space-x-8 space-y-4 md:space-y-0 md:z-auto z-0 underline md:bg-transparent bg-stone-100"
		>
			<a href="/about/">About</a>
			<a href="/guides/">Guides</a>
			{#each Object.entries(config.bots) as [id, bot]}
				<NavMenu title={bot.eventName}>
					{#each Object.entries(config.sitePaths) as [path, info]}
						{#if bot[path]}
							<li>
								<a href="/{id}/{path}/">{info.name}</a>
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
