module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		screens: {
			sm: '640px',
			md: '768px',
			lg: '1025px',
			xl: '1280px',
			'2xl': '1620px',
		},
		colors: {
			"active": "#01F0D0",
			"theme": "#01F0D0",
			"active-faint":  "#D8FCF7",
			"gray-level-1": "#cac8d4"
		},
		extend: {
			fontFamily: {
				sans: ['DM Sans', 'sans-serif'],
			},
		},
	},
	plugins: [],
};
