import { error } from '@sveltejs/kit';
import config from '$lib/config';
import type { PageLoad } from '@sveltejs/kit';

export const load: PageLoad = async ({ params, fetch }) => {
	const url = config.bots[params.bot].baseUrl + config.apiPaths.count;
	const res = await fetch(url);

	if (res.ok) {
		return { counts: await res.json() };
	} else {
		throw error(500, `Could not load ${url}: ${res.status} ${res.statusText}`);
	}
};

export const prerender = true;
