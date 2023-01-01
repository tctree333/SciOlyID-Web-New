import { redirect } from '@sveltejs/kit';
import config from '$lib/config';

import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	throw redirect(302, config.invite);
};
