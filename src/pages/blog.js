import React from 'react';

import Layout from '../components/Layout';
import Head from '../components/Head';

const Blog = () => {
	return (
		<Layout>
			<Head title="Blog" />
			<h1>This is my blog page.</h1>
			<p>All the blog posts will be listed here.</p>
		</Layout>
	);
};

export default Blog;
