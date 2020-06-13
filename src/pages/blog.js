import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Layout from '../components/Layout';
import Head from '../components/Head';
import Card from '../components/Card';

const query = graphql`
	query GetAllBlogs {
		allStrapiBlogs(sort:{fields: publishedDate, order: DESC}) {
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
<<<<<<< HEAD
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
=======
			{data.allContentfulBlogPost.edges.length > 0 ? (
				<div className="grid gap-4 grid-cols-1 lg:gap-6">
					{data.allContentfulBlogPost.edges.map(({ node }) => (
						<Card key={node.id} data={node} />
>>>>>>> 37e33ce8f21bc4b97df6bcf85ec63c7cb5f30ddb
					))}
				</div>
			) : (
				<p>There are no blog posts yet. Come back later!</p>
			)}
		</Layout>
	);
};

export default Blog;
