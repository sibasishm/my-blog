import React from 'react';
import { graphql } from 'gatsby';
import Image from 'gatsby-image';

import Head from '../components/Head';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const query = graphql`
	query GetABlog($slug: String) {
		markdownRemark(fields: { slug: { eq: $slug } }) {
			frontmatter {
				title
				publishedDate(formatString: "MMM Do, YYYY")
				banner {
					childImageSharp {
						fluid {
							...GatsbyImageSharpFluid
						}
					}
				}
			}
			html
		}
	}
`;

const Blog = ({ data }) => {
	const {
		markdownRemark: {
			frontmatter: { title, publishedDate, banner },
			html
		}
	} = data;
	return (
		<div>
			<Head title={title} />
			<Header />
			<section className="container mx-auto p-4 md:px-8">
				<div className="container mx-auto px-4 md:px-12">
					<h1 className="text-3xl font-semibold leading-tight md:text-4xl lg:text-5xl">
						{title}
					</h1>
					<p className="mt-1 text-gray-500 text-base md:text-lg">
						Published on: {publishedDate}
					</p>
				</div>
				<Image
					sizes={{
						...banner.childImageSharp.fluid,
						aspectRatio: 21 / 9
					}}
					className="mt-4"
				/>
				<article
					className="container mx-auto px-4 md:px-12 md:text-lg leading-relaxed"
					dangerouslySetInnerHTML={{ __html: html }}
				></article>
			</section>
			<Footer />
		</div>
	);
};

export default Blog;
