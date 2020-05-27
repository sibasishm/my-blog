import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';

const Home = () => (
	<Layout>
		<h1>Hi, I am Sibasish.</h1>
		<p>I am a full stack developer based in Bengaluru, India.</p>
		<p>
			Need a hand in your web project?{' '}
			<Link to="/contact">Contact me</Link>.
		</p>
	</Layout>
);

export default Home;
