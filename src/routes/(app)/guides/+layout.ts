import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	const modules = import.meta.glob('./**/*.md');
	const docs = await Promise.all(
		Object.entries(modules).map(async ([filename, module]) => {
			const { metadata } = (await module()) as {
				metadata: { title: string; description: string; order: number };
			};
			return {
				path: '/guides/' + filename.split('/')[1] + '/',
				...metadata
			};
		})
	);
	docs.sort((a, b) => a.order - b.order);

	return {
		docs
	};
};
