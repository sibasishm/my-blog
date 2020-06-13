import React from 'react';
import { graphql } from 'gatsby';
import ReactMarkdown from 'react-markdown';

import Layout from '../components/Layout';
import Head from '../components/Head';

export const query = graphql`
	query GetABlog($slug: String) {
		blog: strapiBlogs(slug: { eq: $slug }) {
			title
			content
		}
	}
`;

const Blog = ({ data: { blog } }) => {
	const { title, content } = blog;
	return (
		<Layout>
			<Head title={title} />
			<section>
				<h1>{title}</h1>
				<p>Posted on: {data.contentfulBlogPost.publishedDate}</p>
				<article>
					<ReactMarkdown source={content} />
				</article>
			</section>
		</Layout>
	);
};

export default Blog;
