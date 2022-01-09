<script lang="ts">
	import config from '$lib/config';
	import UserButton from './UserButton.svelte';
</script>

<nav>
	<ul>
		<li><a sveltekit:prefetch href="/">SciOlyID</a></li>
		<li><a sveltekit:prefetch href="/about/">About</a></li>
		<li><a sveltekit:prefetch href="/guides/">Guides</a></li>
		{#each Object.entries(config.bots) as [id, bot]}
			<li>
				<ul>
					<span>{bot.eventName}</span>
					{#each Object.entries(config.sitePaths) as [path, info]}
						{#if bot[path]}
							<li>
								<a sveltekit:prefetch href="/{id}/{path}/">{info.name}</a>
							</li>
						{/if}
					{/each}
				</ul>
			</li>
		{/each}
		<li><UserButton /></li>
	</ul>
</nav>
