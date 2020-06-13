import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Layout from '../components/Layout';
import Head from '../components/Head';
import Card from '../components/Card';

const query = graphql`
	query GetAllBlogs {
		allStrapiBlogs(sort: { fields: publishedDate, order: DESC }) {
			nodes {
				id
				slug
				title
				publishedDate(formatString: "MMM Do, YYYY")
				summary
				coverImage {
					absolutePath
				}
			}
		}
	}
`;

const Blog = () => {
	const data = useStaticQuery(query);
	const {
		allStrapiBlogs: { nodes: blogs }
	} = data;
	return (
		<Layout>
			<Head title="Blog" />
			<h1>This is my blog page.</h1>
			<p>All the blog posts will be listed here.</p>
			{blogs.length > 0 ? (
				<div className="grid gap-4 grid-cols-1 lg:gap-6">
					{blogs.map(blog => (
						<Card key={blog.id} data={blog} />
					))}
				</div>
			) : (
				<p>There are no blog posts yet. Come back later!</p>
			)}
		</Layout>
	);
};

export default Blog;
