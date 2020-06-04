import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';
import Head from '../components/Head';

const About = () => (
	<Layout>
		<Head title="About" />
		<h1>About me</h1>
		<p>Some more information about me.</p>
		<p>
			Sounds interesting? <Link to="/contact">Contact me</Link>.
		</p>
	</Layout>
);

export default About;
