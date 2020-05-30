import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Layout from '../components/Layout';

const Blog = () => {
	const data = useStaticQuery(graphql`
		query {
			allMarkdownRemark {
				edges {
					node {
						id
						frontmatter {
							title
							date
							description
						}
						html
						excerpt
					}
				}
			}
		}
	`);

	return (
		<Layout>
			<h1>This is my blog page.</h1>
			<p>All the blog posts will be listed here.</p>
			{data.allMarkdownRemark.edges.length > 0 ? (
				<ol>
					{data.allMarkdownRemark.edges.map(({ node }) => (
						<li key={node.id}>
							<h2>{node.frontmatter.title}</h2>
							<p>{node.frontmatter.date}</p>
							<p>{node.frontmatter.description}</p>
						</li>
					))}
				</ol>
			) : (
				<p>There are no blog posts yet. Come back later!</p>
			)}
		</Layout>
	);
};

export default Blog;
