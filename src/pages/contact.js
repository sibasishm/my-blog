import React from 'react';

import Layout from '../components/Layout';
import Head from '../components/Head';

const Contact = () => (
	<Layout>
		<Head title="Contact" />
		<h1>Contact information</h1>
		<p>I am a social animal. You can reach me anytime, anywhere.</p>
		<a
			href="https://twitter.com/smsibasish"
			target="_blank"
			rel="noreferrer"
			className="btn btn-blue"
		>
			Twitter
		</a>
	</Layout>
);

export default Contact;
