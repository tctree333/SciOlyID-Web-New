const config = {
	extensions: ['.svelte.md', '.md', '.svx'],

	smartypants: {
		dashes: 'oldschool'
	},

	layout: { _: './src/lib/layouts/base.svelte' },

	remarkPlugins: [],
	rehypePlugins: []
};

export default config;
