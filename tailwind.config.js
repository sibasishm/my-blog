module.exports = {
	purge: [
		'./src/**/*.js',
		'./src/**/*.jsx',
		'./src/**/*.ts',
		'./src/**/*.tsx'
	],
	theme: {
		extend: {
			spacing: {
				'1/2': '50%',
				'1/3': '33.33333%',
				'2/3': '66.66667%',
				'1/4': '25%',
				'3/4': '75%',
				'1/5': '20%',
				'2/5': '40%',
				'3/5': '60%',
				'4/5': '80%'
			}
		},
		fontFamily: {
			display: ['DM Serif Display', 'Georgia', 'serif'],
			body: ['Rubik', 'Arial', 'sans-serif']
		},
		fontSize: {
			xs: '.75rem',
			sm: '.875rem',
			base: '1rem',
			lg: '1.125rem',
			xl: '1.25rem',
			'2xl': '1.5rem',
			'3xl': '1.875rem',
			'4xl': '2.25rem',
			'5xl': '3rem',
			'6xl': '4rem',
			'7xl': '6rem'
		}
	},
	variants: {},
	plugins: []
};
