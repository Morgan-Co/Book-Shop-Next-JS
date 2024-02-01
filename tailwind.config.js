/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				'primary-purple': '#4C3DB2',
				'secondary-purple': '#756AD3',
				'light-purple': '#9E98DC',
				'dark-blue': '#1C2A39',
				'google-red': '#db4437',
				gray: '#5C6A79',
				red: '#FF353A',
				pink: '#ffe0e2',
				star: '#f2c94c'
			},
			screens: {
				xs: '480px',
				ss: '620px',
				sm: '768px',
				md: '1060px',
				lg: '1200px',
				xl: '1700px',
			},
		},
	},
	plugins: [],
}
