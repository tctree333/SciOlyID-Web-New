import type { PageLoad } from '@sveltejs/kit';

export const load: PageLoad = async () => {
	const modules = import.meta.glob('./*.md');
	const docs = await Promise.all(
		Object.entries(modules).map(async ([filename, module]) => {
			const { metadata } = await module();
			return { path: '/guides/' + filename.substring(2, filename.length - 3) + '/', ...metadata };
		})
	);
	docs.sort((a, b) => a.order - b.order);
	return {
		docs
	};
};
