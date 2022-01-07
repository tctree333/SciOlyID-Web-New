<script lang="ts">
	import Head from '$lib/components/Head.svelte';
	import Card from '$lib/components/landing/Card.svelte';
	import Hero from '$lib/components/landing/Hero.svelte';
	import Section from '$lib/components/landing/Section.svelte';
</script>

<Head
	title="Get Better At Specimen ID | SciOlyID"
	description="Practicing specimen identification can be tedious, but it doesn't have to be. Get started with SciOlyID today!"
/>

<Hero title="Get Better At Specimen ID">
	<p slot="description">
		Practicing specimen identification can be tedious, but it doesn't have to be. Identifying
		specimens quickly and accurately is essential to Science Olympiad success, and SciOlyID is here
		to help.
	</p>
	<svelte:fragment slot="cta">
		<a href="https://discord.gg/2HbshwGjnm" class=""
			><svg
				width="71"
				height="55"
				viewBox="0 0 71 55"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<g clip-path="url(#clip0)">
					<path
						d="M60.1045 4.8978C55.5792 2.8214 50.7265 1.2916 45.6527 0.41542C45.5603 0.39851 45.468 0.440769 45.4204 0.525289C44.7963 1.6353 44.105 3.0834 43.6209 4.2216C38.1637 3.4046 32.7345 3.4046 27.3892 4.2216C26.905 3.0581 26.1886 1.6353 25.5617 0.525289C25.5141 0.443589 25.4218 0.40133 25.3294 0.41542C20.2584 1.2888 15.4057 2.8186 10.8776 4.8978C10.8384 4.9147 10.8048 4.9429 10.7825 4.9795C1.57795 18.7309 -0.943561 32.1443 0.293408 45.3914C0.299005 45.4562 0.335386 45.5182 0.385761 45.5576C6.45866 50.0174 12.3413 52.7249 18.1147 54.5195C18.2071 54.5477 18.305 54.5139 18.3638 54.4378C19.7295 52.5728 20.9469 50.6063 21.9907 48.5383C22.0523 48.4172 21.9935 48.2735 21.8676 48.2256C19.9366 47.4931 18.0979 46.6 16.3292 45.5858C16.1893 45.5041 16.1781 45.304 16.3068 45.2082C16.679 44.9293 17.0513 44.6391 17.4067 44.3461C17.471 44.2926 17.5606 44.2813 17.6362 44.3151C29.2558 49.6202 41.8354 49.6202 53.3179 44.3151C53.3935 44.2785 53.4831 44.2898 53.5502 44.3433C53.9057 44.6363 54.2779 44.9293 54.6529 45.2082C54.7816 45.304 54.7732 45.5041 54.6333 45.5858C52.8646 46.6197 51.0259 47.4931 49.0921 48.2228C48.9662 48.2707 48.9102 48.4172 48.9718 48.5383C50.038 50.6034 51.2554 52.5699 52.5959 54.435C52.6519 54.5139 52.7526 54.5477 52.845 54.5195C58.6464 52.7249 64.529 50.0174 70.6019 45.5576C70.6551 45.5182 70.6887 45.459 70.6943 45.3942C72.1747 30.0791 68.2147 16.7757 60.1968 4.9823C60.1772 4.9429 60.1437 4.9147 60.1045 4.8978ZM23.7259 37.3253C20.2276 37.3253 17.3451 34.1136 17.3451 30.1693C17.3451 26.225 20.1717 23.0133 23.7259 23.0133C27.308 23.0133 30.1626 26.2532 30.1066 30.1693C30.1066 34.1136 27.28 37.3253 23.7259 37.3253ZM47.3178 37.3253C43.8196 37.3253 40.9371 34.1136 40.9371 30.1693C40.9371 26.225 43.7636 23.0133 47.3178 23.0133C50.9 23.0133 53.7545 26.2532 53.6986 30.1693C53.6986 34.1136 50.9 37.3253 47.3178 37.3253Z"
						fill="currentColor"
					/>
				</g>
				<defs>
					<clipPath id="clip0">
						<rect width="71" height="55" fill="white" />
					</clipPath>
				</defs>
			</svg>Join the Discord</a
		>
		<a href="/guides/getting-started/" class=""
			>Get Started<svg
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
					d="M14 5l7 7m0 0l-7 7m7-7H3"
				/>
			</svg></a
		>
	</svelte:fragment>
</Hero>

<Section>
	<h2 slot="title">Discord bots <span>tailor-made</span> for Science Olympiad</h2>
	<svelte:fragment slot="content">
		<p>
			SciOlyID was born from a need for a better way to practice identification for Science
			Olympiad, specifically bird ID for Ornithology. We later expanded to Fossils and Reach for the
			Stars (now discontinued). Currently, we operate Bird-ID for Ornithology and Minerobo for Rocks
			and Minerals. We support the latest specimen lists in the Science Olympiad rulebook in
			addition to state-specific bird lists for Ornithology. It's not just images either!
			Sound-based identification is available for Ornithology too.
		</p>
		<p>
			Since SciOlyID integrates within Discord, we meet students where they're likely to be, making
			it super easy to get practice wherever they go. We're also working on a web version of
			SciOlyID, currently available for Bird-ID with a limited feature set.
		</p>
	</svelte:fragment>
</Section>

<Section>
	<h2 slot="title">Benefits</h2>
	<svelte:fragment slot="content">
		<Card title="Rapid-Fire Practice">
			Accelerate your learning process! SciOlyID takes care of finding images for each specimen,
			pulling from a vast database with thousands of photos. Put down the flashcards and start
			training with a wider variety of pictures instead.
		</Card>
		<Card title="Fun and Engaging">
			SciOlyID gamifies studying, making ID practice enjoyable and exciting. Compete with students
			across the country for a spot on the global leaderboard, or start an ID race with your friends
			to see who has the sharper skills (or is just better at typing).
		</Card>
		<Card title="Personalized Studying">
			Keep track of commonly missed IDs with our personal stats to see what needs work. SciOlyID
			also supports customized study sessions where you can choose a specific group of specimens to
			practice. Make ID practice more effective with SciOlyID!
		</Card>
		<Card title="Collaborative Community">
			By being within Discord, a community is already at your fingertips! Set up a team server to
			encourage each other, share ID tips, or engage in friendly competition. You can also join our
			support server, a group of peers that share a passion for Science Olympiad.
		</Card>
	</svelte:fragment>
</Section>
<Section>
	<h2 slot="title">Features</h2>
	<ul slot="content">
		<li>Bird Song ID Practice (Bird-ID)</li>
		<li>State-Specific Bird Lists (Bird-ID)</li>
		<li>Custom Bird List (Bird-ID)</li>
		<li>Macaulay Content Filters (Bird-ID)</li>
		<li>ID Races</li>
		<li>Taxon Groups</li>
		<li>Score Leaderboards</li>
		<li>Commonly Missed IDs</li>
		<li>Study Sessions</li>
		<li>Black and White Image Filter</li>
	</ul>
</Section>
<Section>
	<h2 slot="title">Testimonials</h2>
	<svelte:fragment slot="content">
		<figure>
			<blockquote>
				I love the way SciOlyID is designed to be fun and engaging. I love the way it integrates
				with Discord, and I love the way it's easy to use. I love the way it supports the latest
				rulebook, and I love the way it supports state-specific bird lists. I love the way it
				supports the latest specimen lists, and I love the way it supports the Macaulay Content
				Filters. I love the way it supports ID
			</blockquote>
			<figcaption>&mdash;GitHub Copilot <span>Very Legit University</span></figcaption>
		</figure>
	</svelte:fragment>
</Section>
