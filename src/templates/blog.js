import React from 'react';
import ReactMarkdown from 'react-markdown';
import { graphql } from 'gatsby';

import Head from '../components/Head';
import Layout from '../components/Layout';

export const query = graphql`
	query GetABlog($slug: String) {
		markdownRemark(fields: { slug: { eq: $slug } }) {
			frontmatter {
				title
				publishedDate(formatString: "MMM Do, YYYY")
				content
			}
		}
	}
`;

const Blog = ({ data }) => {
	const {
		markdownRemark: {
			frontmatter: { title, content, publishedDate }
		}
	} = data;
	return (
		<Layout>
			<Head title={title} />
			<h1>{title}</h1>
			<p>Published on: {publishedDate}</p>
			<article>
				<ReactMarkdown source={content} />
			</article>
		</Layout>
	);
};

export default Blog;
