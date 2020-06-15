import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Layout from '../components/Layout';
import Head from '../components/Head';
import Card from '../components/Card';

const query = graphql`
	query GetAllBlogs {
		allMarkdownRemark {
			edges {
				node {
					id
					frontmatter {
						title
						publishedDate(formatString: "MMM Do, YYYY")
						summary
						thumbnail {
							childImageSharp {
								fluid {
									...GatsbyImageSharpFluid_noBase64
								}
							}
						}
					}
					fields {
						slug
					}
				}
			}
		}
	}
`;

const Blog = () => {
	const data = useStaticQuery(query);
	const {
		allMarkdownRemark: { edges: blogs }
	} = data;
	return (
		<Layout>
			<Head title="Blog" />
			<h1>This is my blog page.</h1>
			<p>All the blog posts will be listed here.</p>
			{blogs.map(({ node: { id, frontmatter, fields } }) => (
				<Card key={id} link={fields.slug} {...frontmatter} />
			))}
		</Layout>
	);
};

export default Blog;
