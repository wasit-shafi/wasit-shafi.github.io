/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	content: ['./src/**/*.{html,ts}'],
	theme: {
		screens: {
			'2xs': '300px',
			xs: '470px',
			...defaultTheme.screens,
		},
	},
	plugins: [],
};
