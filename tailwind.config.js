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
		extend: {
			opacity: {
				1: '.01',
				4: '.04',
			},
			backdropBlur: {
				'12px': '12px',
			},
			colors: {
				black: 'rgb(00 00 00 / <alpha-value>)',
				white: 'rgb(255 255 255 / <alpha-value>)',
				persianGreen: 'rgb(9 166 149 / <alpha-value>)',
				sunnyYellow: 'rgb(230 255 22 / <alpha-value>)',
				qatar: 'rgb(138 21 56 / <alpha-value>)',

				bgPrimary: 'rgb(var(--color-bg-primary)  / <alpha-value>)',
				bgPrimaryInverse:
					'rgb(var(--color-bg-primary-inverse)  / <alpha-value>)',

				txtPrimary: 'rgb(var(--color-txt-primary)  / <alpha-value>)',
				txtSecondary: 'rgb(var(--color-txt-secondary)  / <alpha-value>)',
				txtTernary: 'rgb(var(--color-txt-ternary)  / <alpha-value>)',
				txtQuaternary: 'rgb(var(--color-txt-quaternary)  / <alpha-value>)',
			},

			fontFamily: {
				karla: ['Karla', 'sans-serif'],
				'nanum-pen': ['Nanum Pen Script', 'cursive'],
			},
		},
	},

	plugins: [],

	darkMode: 'class',
};
