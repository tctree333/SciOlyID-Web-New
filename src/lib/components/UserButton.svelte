<script lang="ts">
	import config from '$lib/config';
	import { getContext } from 'svelte';

	let botUrl: string | undefined = getContext('botUrl');

	let profile: { username: string; avatar: string };

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
</script>

{#if botUrl}
	{#if !profile}
		<a
			class="px-3 py-2 my-1 text-lg font-medium md:text-xl btn btn-indigo"
			href={botUrl + config.apiPaths.login}>Login</a
		>
	{:else}
		<div class="group">
			<div class="flex items-center justify-end md:px-3 md:py-1">
				<p class="hidden mr-4 lg:block">{profile.username}</p>
				<img class="h-10 rounded-full sm:h-12" alt="profile" src={profile.avatar} />
			</div>
			<div
				class="fixed top-0 right-0 hidden p-4 px-6 mt-16 mr-8 bg-gray-400 rounded shadow-md group-hover:block"
			>
				<a class="px-2 py-1 rounded-full shadow btn btn-red" href={botUrl + config.apiPaths.logout}
					>Logout</a
				>
			</div>
		</div>
	{/if}
{:else}
	<div class="w-6 md:w-28" />
{/if}
