import { error } from '@sveltejs/kit';
import type { PageLoad } from '@sveltejs/kit';

export const load: PageLoad = async () => {
	throw error(404, 'Not Found');
};
