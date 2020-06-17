import React from 'react';
// import sanitizeHTML from 'sanitize-html';
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
	// const sanitizedHTML = sanitizeHTML(html, {
	// 	allowedTags: sanitizeHTML.defaults.allowedTags.concat(['img'])
	// });
	return (
		<Layout>
			<Head title={title} />
			<h1 className="text-2xl font-semibold leading-tight lg:text-4xl">
				{title}
			</h1>
			<p className="mt-1 text-gray-500 text-sm lg:text-base">
				Published on: {publishedDate}
			</p>
			<article
				className="mt-4 leading-relaxed"
				dangerouslySetInnerHTML={{ __html: html }}
			></article>
		</Layout>
	);
};

export default Blog;
