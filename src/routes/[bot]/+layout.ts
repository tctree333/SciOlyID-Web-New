import { error } from '@sveltejs/kit';
import config from '$lib/config';

import type { PageLoad } from '@sveltejs/kit';

export const load: PageLoad = async ({ url, params }) => {
	if (
		Object.keys(config.bots).includes(params.bot) &&
		Object.keys(config.sitePaths).includes(url.pathname.split('/')[2]) &&
		config.bots[params.bot][url.pathname.split('/')[2]]
	) {
		throw new Error("@migration task: Migrate this return statement (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693)");
		return {
			status: 200,
			props: { botUrl: config.bots[params.bot].baseUrl }
		};
	} else {
		throw error(404, 'Not found');
	}
};
