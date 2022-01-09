<script lang="ts">
	import config from '$lib/config';
	import UserButton from './UserButton.svelte';
</script>

<nav>
	<ul>
		<li><a sveltekit:prefetch href="/">SciOlyID</a></li>
		<li><a sveltekit:prefetch href="/about/">About</a></li>
		<li><a sveltekit:prefetch href="/guides/">Guides</a></li>
		{#each Object.keys(config.bots) as bot}
			<li>
				<ul>
					<span>{bot.charAt(0).toUpperCase() + bot.substring(1)}</span>
					{#each config.sitePaths as path}
						{#if config.bots[bot][path]}
							<li>
								<a sveltekit:prefetch href="/{bot}/{path}/"
									>{path.charAt(0).toUpperCase() + path.substring(1)}</a
								>
							</li>
						{/if}
					{/each}
				</ul>
			</li>
		{/each}
		<li><UserButton /></li>
	</ul>
</nav>
