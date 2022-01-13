const typography = require('@tailwindcss/typography');
const forms = require('@tailwindcss/forms');
const theme = require('tailwindcss/defaultTheme');

const config = {
	content: ['./src/**/*.{html,js,svelte,ts}', './mdsvex.config.js'],

	theme: {
		extend: {
			fontFamily: {
				sans: ['PT Root UI', ...theme.fontFamily.sans]
			}
		}
	},

	plugins: [typography, forms]
};

module.exports = config;
