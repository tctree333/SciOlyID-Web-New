import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import remarkToc from 'remark-toc';

const config = {
	extensions: ['.svelte.md', '.md', '.svx'],

	smartypants: {
		dashes: 'oldschool'
	},

	layout: { _: './src/lib/layouts/base.svelte' },

	remarkPlugins: [[remarkToc, { tight: true, ordered: true }]],
	rehypePlugins: [
		rehypeSlug,
		[
			rehypeAutolinkHeadings,
			{
				behavior: 'wrap',
				properties: {
					className: 'no-underline hover:underline'
				}
			}
		]
	]
};

export default config;
