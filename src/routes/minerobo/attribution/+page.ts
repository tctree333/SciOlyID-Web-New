import { error } from '@sveltejs/kit';
import type { PageLoad } from '@sveltejs/kit';

export const load: PageLoad = async ({ fetch }) => {
	const url =
		'https://raw.githubusercontent.com/tctree333/Minerobo/main/image_attributions.json';
	if (!url) throw error(404);

	const res = await fetch(url);

	if (res.ok) {
		return { attribution: await res.json() };
	} else {
		throw error(500, `Could not load ${url}: ${res.status} ${res.statusText}`);
	}
};

export const prerender = true;
