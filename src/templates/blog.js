import React from 'react';
import DOMPurify from 'dompurify';
import { graphql } from 'gatsby';

import Head from '../components/Head';
import Layout from '../components/Layout';

export const query = graphql`
	query GetABlog($slug: String) {
		markdownRemark(fields: { slug: { eq: $slug } }) {
			frontmatter {
				title
				publishedDate(formatString: "MMM Do, YYYY")
			}
			html
		}
	}
`;

const Blog = ({ data }) => {
	const {
		markdownRemark: {
			frontmatter: { title, publishedDate },
			html
		}
	} = data;
	return (
		<Layout>
			<Head title={title} />
			<h1>{title}</h1>
			<p>Published on: {publishedDate}</p>
			<article
				dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(html) }}
			></article>
		</Layout>
	);
};

export default Blog;
