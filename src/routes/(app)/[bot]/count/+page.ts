import { error } from '@sveltejs/kit';
import config from '$lib/config';
import type { PageLoad } from '@sveltejs/kit';
import type { BotMediaCounts } from '$lib/apiTypes';

export const load: PageLoad = async ({ params, fetch }) => {
	const url = config.bots[params.bot].baseUrl + config.apiPaths.count;
	const res = await fetch(url);

	const data = (await res.json()) as BotMediaCounts;

	if (res.ok) {
		return { counts: data };
	} else {
		throw error(500, `Could not load ${url}: ${res.status} ${res.statusText}`);
	}
};

export const prerender = true;
