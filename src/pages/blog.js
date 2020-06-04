import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';

import Layout from '../components/Layout';

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
					}
				}
			}
		}
	`);

	return (
		<Layout>
			<h1>This is my blog page.</h1>
			<p>All the blog posts will be listed here.</p>
			{data.allContentfulBlogPost.edges.length > 0 ? (
				<ol>
					{data.allContentfulBlogPost.edges.map(({ node }) => (
						<li key={node.id}>
							<Link to={`/blog/${node.slug}`}>
								<h2>{node.title}</h2>
								<p>{node.publishedDate}</p>
								<p>{node.summary}</p>
							</Link>
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
