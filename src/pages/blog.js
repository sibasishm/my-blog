import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Layout from '../components/Layout';
import Head from '../components/Head';
import Card from '../components/Card';

const query = graphql`
	query GetAllBlogs {
		allMarkdownRemark(
			sort: { fields: [frontmatter___publishedDate], order: DESC }
		) {
			edges {
				node {
					id
					frontmatter {
						title
						publishedDate(formatString: "MMM Do, YYYY")
						summary
						banner {
							childImageSharp {
								fluid {
									...GatsbyImageSharpFluid
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
			<section className="grid gap-4 grid-cols-1 lg:gap-6">
				{blogs.map(({ node: { id, frontmatter, fields } }) => (
					<Card key={id} link={fields.slug} {...frontmatter} />
				))}
			</section>
		</Layout>
	);
};

export default Blog;
