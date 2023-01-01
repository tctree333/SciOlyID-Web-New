import config from '$lib/config';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	return { baseUrl: config.bots[params.bot].baseUrl };
};
