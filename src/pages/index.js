import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';
import Head from '../components/Head';

const Home = () => (
	<Layout>
		<Head title="Home" />
		<h1 className="font-medium">
			Hi, I am Sibasish,{' '}
			<span>a full stack developer based in Bengaluru, India.</span>
		</h1>
		<p>
			Need a hand in your web project?{' '}
			<Link to="/contact">Contact me</Link>.
		</p>
	</Layout>
);

export default Home;
