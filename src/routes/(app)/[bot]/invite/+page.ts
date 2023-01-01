import { redirect } from '@sveltejs/kit';
import config from '$lib/config';

import type { PageLoad } from '@sveltejs/kit';

export const load: PageLoad = async ({ params }) => {
	throw redirect(302, config.bots[params.bot].invite);
};
