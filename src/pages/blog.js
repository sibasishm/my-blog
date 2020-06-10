import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Layout from '../components/Layout';
import Head from '../components/Head';
import Card from '../components/Card';

const Blog = () => {
	const data = useStaticQuery(graphql`
		query {
			allContentfulBlogPost(
				sort: { fields: publishedDate, order: DESC }
			) {
				edges {
					node {
						id
						title
						slug
						summary
						publishedDate(formatString: "MMM Do, YYYY")
						coverImage {
							file {
								url
							}
							title
						}
					}
				}
			}
		}
	`);

	return (
		<Layout>
			<Head title="Blog" />
			<h1>This is my blog page.</h1>
			<p>All the blog posts will be listed here.</p>
			{data.allContentfulBlogPost.edges.length > 0 ? (
				data.allContentfulBlogPost.edges.map(({ node }) => (
					<Card key={node.id} data={node} />
				))
			) : (
				<p>There are no blog posts yet. Come back later!</p>
			)}
		</Layout>
	);
};

export default Blog;
