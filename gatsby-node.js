const path = require('path');
const { fmImagesToRelative } = require('gatsby-remark-relative-images');

module.exports.onCreateNode = ({
	node,
	actions: { createNodeField },
	getNode
}) => {
	fmImagesToRelative(node);
	if (node.internal.type === 'MarkdownRemark') {
		const slug = path.basename(node.fileAbsolutePath, '.md');

		createNodeField({
			node,
			name: 'slug',
			value: slug
		});
	}
};

module.exports.createPages = async ({ graphql, actions: { createPage } }) => {
	const blogTemplate = path.resolve('./src/templates/blog.js');

	const res = await graphql(`
		query {
			allMarkdownRemark {
				edges {
					node {
						fields {
							slug
						}
					}
				}
			}
		}
	`);

	res.data.allMarkdownRemark.edges.forEach(({ node }) => {
		const slug = node.fields.slug;
		createPage({
			component: blogTemplate,
			path: `/blog/${slug}`,
			context: {
				slug
			}
		});
	});
};
