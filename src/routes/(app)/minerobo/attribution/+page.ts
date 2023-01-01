import { error } from '@sveltejs/kit';
import type { PageLoad } from '@sveltejs/kit';

export const load: PageLoad = async ({ fetch }) => {
	const url = 'https://raw.githubusercontent.com/tctree333/Minerobo/main/image_attributions.json';
	if (!url) throw error(404);

	const res = await fetch(url);

	const attribution = (await res.json()) as { [hash: string]: string };

	if (res.ok) {
		return { attribution };
	} else {
		throw error(500, `Could not load ${url}: ${res.status} ${res.statusText}`);
	}
};

export const prerender = true;
