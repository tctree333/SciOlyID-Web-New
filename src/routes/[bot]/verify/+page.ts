import config from '$lib/config';
import type { PageLoad } from '@sveltejs/kit';

const verifyUrls = {
	getImage: '/verify/',
	confirm: '/verify/confirm',
	stats: '/verify/stats'
} as const;

export const load: PageLoad = async ({ params }) => {
	return { baseUrl: config.bots[params.bot].baseUrl };
};
