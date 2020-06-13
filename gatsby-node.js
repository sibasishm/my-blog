const path = require('path');

module.exports.createPages = async ({ graphql, actions: { createPage } }) => {
	const blogTemplate = path.resolve('./src/templates/blog.js');

	const res = await graphql(`
		query {
			allStrapiBlogs {
				nodes {
					slug
				}
			}
		}
	`);

	res.data.allStrapiBlogs.nodes.forEach(({ slug }) => {
		createPage({
			component: blogTemplate,
			path: `/blog/${slug}`,
			context: {
				slug
			}
		});
	});
};
