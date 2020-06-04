const path = require('path');

module.exports.createPages = async ({ graphql, actions: { createPage } }) => {
	const blogTemplate = path.resolve('./src/templates/blog.js');

	const res = await graphql(`
		query {
			allContentfulBlogPost {
				edges {
					node {
						slug
					}
				}
			}
		}
	`);

	res.data.allContentfulBlogPost.edges.forEach(({ node }) => {
		createPage({
			component: blogTemplate,
			path: `/blog/${node.slug}`,
			context: {
				slug: node.slug
			}
		});
	});
};
