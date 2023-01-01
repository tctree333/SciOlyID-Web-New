import { redirect } from '@sveltejs/kit';
import config from '$lib/config';

import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	throw redirect(302, config.bots[params.bot].invite);
};
