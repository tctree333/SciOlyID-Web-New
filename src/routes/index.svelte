<script context="module">
	export const prerender = true;
</script>

<script lang="ts">
	import Head from '$lib/components/Head.svelte';
	import Card from '$lib/components/landing/Card.svelte';
	import Hero from '$lib/components/landing/Hero.svelte';
	import Section from '$lib/components/landing/Section.svelte';

	import testimonials from './_testimonials.json';
</script>

<Head
	title="Get Better At Specimen ID | SciOlyID"
	description="Practicing specimen identification can be tedious, but it doesn't have to be. Get started with SciOlyID today!"
/>

<main class="mt-24 md:mt-32 mb-24 isolate overflow-x-hidden">
	<Hero title="Get Better At Specimen ID">
		<svelte:fragment slot="description">
			<p>
				Practicing specimen identification can be tedious, but it doesn't have to be. Identifying
				specimens quickly and accurately is essential to Science Olympiad success, and SciOlyID is
				here to help.
			</p>
		</svelte:fragment>

		<svelte:fragment slot="cta">
			<a
				sveltekit:prefetch
				href="/guides/getting-started/"
				class="rounded-md px-3 py-2 flex items-center max-w-fit border-2 border-lime-800 bg-lime-800 text-stone-100 hover:shadow-md my-2"
				>Get Started<svg
					xmlns="http://www.w3.org/2000/svg"
					width="20"
					height="20"
					viewBox="0 0 20 20"
					fill="currentColor"
					class="ml-1.5"
				>
					<path
						fill-rule="evenodd"
						d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z"
						clip-rule="evenodd"
					/>
				</svg></a
			>
			<a
				href="/server/"
				class="rounded-md px-3 py-2 border-2 border-[#5865F2] flex items-center max-w-fit text-[#3C48C9] hover:shadow-md my-2 mx-4"
				><svg
					width="25.8181818"
					height="20"
					viewBox="0 0 71 55"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					class="mr-2"
				>
					<g clip-path="url(#clip0)">
						<path
							d="M60.1045 4.8978C55.5792 2.8214 50.7265 1.2916 45.6527 0.41542C45.5603 0.39851 45.468 0.440769 45.4204 0.525289C44.7963 1.6353 44.105 3.0834 43.6209 4.2216C38.1637 3.4046 32.7345 3.4046 27.3892 4.2216C26.905 3.0581 26.1886 1.6353 25.5617 0.525289C25.5141 0.443589 25.4218 0.40133 25.3294 0.41542C20.2584 1.2888 15.4057 2.8186 10.8776 4.8978C10.8384 4.9147 10.8048 4.9429 10.7825 4.9795C1.57795 18.7309 -0.943561 32.1443 0.293408 45.3914C0.299005 45.4562 0.335386 45.5182 0.385761 45.5576C6.45866 50.0174 12.3413 52.7249 18.1147 54.5195C18.2071 54.5477 18.305 54.5139 18.3638 54.4378C19.7295 52.5728 20.9469 50.6063 21.9907 48.5383C22.0523 48.4172 21.9935 48.2735 21.8676 48.2256C19.9366 47.4931 18.0979 46.6 16.3292 45.5858C16.1893 45.5041 16.1781 45.304 16.3068 45.2082C16.679 44.9293 17.0513 44.6391 17.4067 44.3461C17.471 44.2926 17.5606 44.2813 17.6362 44.3151C29.2558 49.6202 41.8354 49.6202 53.3179 44.3151C53.3935 44.2785 53.4831 44.2898 53.5502 44.3433C53.9057 44.6363 54.2779 44.9293 54.6529 45.2082C54.7816 45.304 54.7732 45.5041 54.6333 45.5858C52.8646 46.6197 51.0259 47.4931 49.0921 48.2228C48.9662 48.2707 48.9102 48.4172 48.9718 48.5383C50.038 50.6034 51.2554 52.5699 52.5959 54.435C52.6519 54.5139 52.7526 54.5477 52.845 54.5195C58.6464 52.7249 64.529 50.0174 70.6019 45.5576C70.6551 45.5182 70.6887 45.459 70.6943 45.3942C72.1747 30.0791 68.2147 16.7757 60.1968 4.9823C60.1772 4.9429 60.1437 4.9147 60.1045 4.8978ZM23.7259 37.3253C20.2276 37.3253 17.3451 34.1136 17.3451 30.1693C17.3451 26.225 20.1717 23.0133 23.7259 23.0133C27.308 23.0133 30.1626 26.2532 30.1066 30.1693C30.1066 34.1136 27.28 37.3253 23.7259 37.3253ZM47.3178 37.3253C43.8196 37.3253 40.9371 34.1136 40.9371 30.1693C40.9371 26.225 43.7636 23.0133 47.3178 23.0133C50.9 23.0133 53.7545 26.2532 53.6986 30.1693C53.6986 34.1136 50.9 37.3253 47.3178 37.3253Z"
							fill="#5865F2"
						/>
					</g>
					<defs>
						<clipPath id="clip0">
							<rect width="71" height="55" fill="white" />
						</clipPath>
					</defs>
				</svg>Join the Discord</a
			>
		</svelte:fragment>
	</Hero>

	<Section wrapperClass="bg-stone-200" contentClass="max-w-4xl mx-auto" id="science-olympiad">
		<svelte:fragment slot="title"
			>Discord bots <span class="underline decoration-orange-500 decoration-8">tailor-made</span> for
			Science Olympiad</svelte:fragment
		>
		<svelte:fragment slot="content">
			<p class="mb-4">
				SciOlyID was born from a need for a better way to practice identification for Science
				Olympiad, specifically bird ID for Ornithology. We later expanded to Fossils and Reach for
				the Stars (now discontinued). Currently, we operate Bird-ID for Ornithology, Minerobo for
				Rocks and Minerals, and Treebo for Forestry. We support the latest specimen lists in the
				Science Olympiad rulebook in addition to state-specific specimen lists. It's not just images
				either! Sound-based identification is available for Ornithology too.
			</p>
			<p class="">
				Since SciOlyID integrates within Discord, we meet students where they're likely to be,
				making it super easy to get practice wherever they go. We're also working on a web version
				of SciOlyID, currently available for Bird-ID with a limited feature set.
			</p>
		</svelte:fragment>
	</Section>

	<Section
		wrapperClass="bg-stone-200 mb-36"
		contentClass="flex flex-wrap justify-center items-stretch -mb-36"
		id="benefits"
	>
		<svelte:fragment slot="title">Why SciOlyID?</svelte:fragment>
		<svelte:fragment slot="content">
			<Card title="Rapid-Fire Practice">
				<svg
					slot="icon"
					xmlns="http://www.w3.org/2000/svg"
					width="48"
					height="48"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M13 10V3L4 14h7v7l9-11h-7z"
					/>
				</svg>
				Accelerate your learning process! SciOlyID takes care of finding images for each specimen, pulling
				from a vast database with thousands of photos. Put down the flashcards and start training with
				a wider variety of pictures instead.
			</Card>
			<Card title="Fun and Engaging">
				<svg
					slot="icon"
					xmlns="http://www.w3.org/2000/svg"
					width="48"
					height="48"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
					/>
				</svg>
				SciOlyID gamifies studying, making ID practice enjoyable and exciting. Compete with students
				across the country for a spot on the global leaderboard, or start an ID race with your friends
				to see who has the sharper skills (or is just better at typing).
			</Card>
			<Card title="Personalized Studying">
				<svg
					slot="icon"
					xmlns="http://www.w3.org/2000/svg"
					width="48"
					height="48"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path d="M12 14l9-5-9-5-9 5 9 5z" />
					<path
						d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
					/>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
					/>
				</svg>
				Keep track of commonly missed IDs with our personal stats to see what needs work. SciOlyID also
				supports customized study sessions where you can choose a specific group of specimens to practice.
				Make ID practice more effective with SciOlyID!
			</Card>
			<Card title="Collaborative Community">
				<svg
					slot="icon"
					xmlns="http://www.w3.org/2000/svg"
					width="48"
					height="48"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
					/>
				</svg>
				By being within Discord, a community is already at your fingertips! Set up a team server to encourage
				each other, share ID tips, or engage in friendly competition. Or join our support server, a group
				of peers that share a passion for Science Olympiad.
			</Card>
		</svelte:fragment>
	</Section>
	<Section wrapperClass="pb-8" id="features">
		<svelte:fragment slot="title">Features</svelte:fragment>
		<ul slot="content" class="flex flex-wrap items-center justify-center max-w-6xl mx-auto w-full">
			<li class="feature">
				<a sveltekit:prefetch href="/guides/getting-started/">Bird Song ID Practice (Bird-ID)</a>
			</li>
			<li class="feature">
				<a sveltekit:prefetch href="/guides/getting-fancy/">State-Specific Bird Lists (Bird-ID)</a>
			</li>
			<li class="feature">
				<a sveltekit:prefetch href="/guides/getting-fancy/">Custom Bird List (Bird-ID)</a>
			</li>
			<li class="feature">
				<a sveltekit:prefetch href="/guides/getting-fancy/">Macaulay Content Filters (Bird-ID)</a>
			</li>
			<li class="feature">
				<a sveltekit:prefetch href="/guides/getting-fancy/"
					>State/Nationals vs Regional Specimens (Minerobo)</a
				>
			</li>
			<li class="feature"><a sveltekit:prefetch href="/guides/racing/">ID Races</a></li>
			<li class="feature"><a sveltekit:prefetch href="/guides/getting-fancy/">Taxon Groups</a></li>
			<li class="feature">
				<a sveltekit:prefetch href="/guides/viewing-stats/">Score Leaderboards</a>
			</li>
			<li class="feature">
				<a sveltekit:prefetch href="/guides/viewing-stats/">Commonly Missed IDs</a>
			</li>
			<li class="feature"><a sveltekit:prefetch href="/guides/sessions/">Study Sessions</a></li>
			<li class="feature">
				<a sveltekit:prefetch href="/guides/getting-fancy/">Black and White Image Filter</a>
			</li>
			<li class="feature"><a sveltekit:prefetch href="/guides/getting-started/">and more...</a></li>
		</ul>
	</Section>
	<Section
		contentClass="flex flex-wrap justify-center items-stretch"
		wrapperClass="bg-stone-200 pb-8"
		id="testimonials"
	>
		<svelte:fragment slot="title">How has SciOlyID helped your team?</svelte:fragment>
		<svelte:fragment slot="content">
			{#each testimonials as testimonial}
				<figure
					class="rounded-md shadow-md m-2 p-6 bg-stone-100 max-w-[375px] min-w-[275px] flex-1"
				>
					<img
						src={testimonial.profile}
						alt="{testimonial.name}'s profile"
						class="h-24 w-auto mx-auto block rounded"
					/>
					<blockquote class="mt-4 mb-2 font-medium">
						{testimonial.content}
					</blockquote>
					<figcaption class="text-stone-600">
						<p>
							{testimonial.name}
						</p>
						<p>
							{testimonial.affiliation}
						</p>
					</figcaption>
				</figure>
			{/each}
		</svelte:fragment>
	</Section>
</main>

<style lang="postcss">
	.feature {
		@apply rounded-md shadow-md m-2 font-medium bg-lime-800 text-stone-100 text-lg;
	}
	.feature:hover {
		@apply underline;
	}
	.feature a {
		@apply block p-5;
	}
</style>
