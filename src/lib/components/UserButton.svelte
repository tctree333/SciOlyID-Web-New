<script lang="ts">
	import { navigating } from '$app/stores';

	import config from '$lib/config';
	import { getContext } from 'svelte';

	let botUrl: string | undefined = getContext('botUrl');

	let profile: { username: string; avatar: string };

	let show = false;

	async function updateProfile() {
		const res = await fetch(botUrl + config.apiPaths.profile, {
			method: 'GET',
			credentials: 'include'
		});
		if (res.ok) {
			profile = await res.json();
		}
	}

	if (botUrl) {
		updateProfile();
	}

	navigating.subscribe(() => {
		show = false;
	});
</script>

<svelte:body
	on:click={(ev) => {
		if (show && !ev.target.closest('#userProfile')) show = false;
	}} />

{#if botUrl}
	{#if !profile}
		<a
			class="px-3 py-2 my-1 text-lg font-medium md:text-xl btn btn-indigo"
			href={botUrl + config.apiPaths.login}>Login</a
		>
	{:else}
		<div class="relative">
			<button
				id="userProfile"
				class="flex items-center justify-end md:px-3 md:py-1"
				on:click={() => {
					show = !show;
				}}
			>
				<p class="hidden mr-4 lg:block">{profile.username}</p>
				<img class="h-10 rounded-full sm:h-12" alt="profile" src={profile.avatar} />
			</button>
			<div
				class="absolute right-0 p-3 md:p-4 mt-2 md:mt-0 md:mr-3 bg-stone-200 rounded-md {show
					? 'block'
					: 'hidden'}"
			>
				<a class="underline" href={botUrl + config.apiPaths.logout}>Logout</a>
			</div>
		</div>
	{/if}
{:else}
	<div class="w-6 lg:w-44" />
{/if}
