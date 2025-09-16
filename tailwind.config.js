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
			'3xl': '1792px',
			'4xl': '2048px',
			'5xl': '2304px',
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
				'nanum-pen': ['Nanum Pen Script', 'cursive'],
				'shantell-sans': ['Shantell Sans', 'cursive'],
			},
			animation: {
				'custom-bell-animation':
					'custom-bell-animation 2s ease-in-out infinite',
			},
			keyframes: {
				'custom-bell-animation': {
					// Referred from: https://codepen.io/shhdharmen/pen/NWmOBOY
					// CTM: Instead of using base as 0deg, i am using 180deg and i need to keep the button rotated initially

					'0%': {
						transform: 'rotate(180deg)',
					},
					'10%': {
						transform: 'rotate(194deg)', // 194 - 180 = 14
					},
					'20%': {
						transform: 'rotate(172deg)', // 172 - 180 = -8
					},
					'30%': {
						transform: 'rotate(194deg)', // 194 - 180 = 14
					},
					'40%': {
						transform: 'rotate(176deg)', // 176 - 180 = -4
					},
					'50%': {
						transform: 'rotate(190deg)', // 190 - 180 = 10
					},
					'60%': {
						transform: 'rotate(180deg)',
					},
					'100%': {
						transform: 'rotate(180deg)',
					},
				},
			},
		},
	},

	plugins: [],

	darkMode: 'class',
};
