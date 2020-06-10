import React from 'react';
import { graphql } from 'gatsby';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import Layout from '../components/Layout';
import Head from '../components/Head';

export const query = graphql`
	query($slug: String) {
		contentfulBlogPost(slug: { eq: $slug }) {
			title
			publishedDate(formatString: "MMM Do, YYYY")
			body {
				json
			}
		}
	}
`;

const Blog = ({ data }) => {
	const options = {
		renderNode: {
			'embedded-asset-block': ({ data }) => {
				const image = data.target.fields;
				if (!image) {
					return null;
				}
				const alt = image.title['en-US'];
				const url = image.file['en-US'].url;

				return (
					<figure>
						<img src={url} alt={alt} />
						<figcaption>{alt}</figcaption>
					</figure>
				);
			}
		}
	};

	const title = data.contentfulBlogPost.title;

	return (
		<Layout>
			<Head title={title} />
			<h1>{title}</h1>
			<p>Posted on: {data.contentfulBlogPost.publishedDate}</p>
			{documentToReactComponents(
				data.contentfulBlogPost.body.json,
				options
			)}
		</Layout>
	);
};

export default Blog;
