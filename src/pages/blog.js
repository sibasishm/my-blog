import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';

import Layout from '../components/Layout';
import Head from '../components/Head';

const query = graphql`
	query GetAllBlogs {
		allStrapiBlogs {
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
				<ol>
					{blogs.map(blog => (
						<li key={blog.id}>
							<Link to={`/blog/${blog.slug}`}>
								<h2>{blog.title}</h2>
								<p>{blog.publishedDate}</p>
								<p>{blog.summary}</p>
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
