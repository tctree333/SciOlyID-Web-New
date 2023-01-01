import { error } from '@sveltejs/kit';
import config from '$lib/config';

import type { PageLoad } from './$types';

export const load: PageLoad = async ({ url, params }) => {
	if (
		Object.keys(config.bots).includes(params.bot) &&
		Object.keys(config.sitePaths).includes(url.pathname.split('/')[2]) &&
		config.bots[params.bot][url.pathname.split('/')[2]]
	) {
		return {
			botUrl: config.bots[params.bot].baseUrl
		};
	} else {
		throw error(404, 'Not found');
	}
};

export const trailingSlash = 'always';
