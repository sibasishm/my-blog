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
		}
	},
	variants: {},
	plugins: []
};
