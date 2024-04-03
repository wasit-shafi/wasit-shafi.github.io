/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

// 640 - 300 = 340 / 3 = 113.33
// 300 + 113 = 413
// 413 + 113 = 526
module.exports = {
	content: ['./src/**/*.{html,ts}'],
	theme: {
		screens: {
			'3xs': '300px',
			'2xs': '413px',
			xs: '526px',
			...defaultTheme.screens,
		},
	},
	plugins: [],
};
