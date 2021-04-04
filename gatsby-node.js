const path = require("path");

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const recipeTemplate = path.resolve(`src/templates/recipe.tsx`);

  const res = await graphql(`
    query {
      allContentfulRecipesPost {
        nodes {
          slug
        }
      }
    }
  `);
  res.data.allContentfulRecipesPost.nodes.forEach((obj) => {
    createPage({
      component: recipeTemplate,
      path: `/recipes/${obj.slug}`,
      context: {
        slug: obj.slug,
      },
    });
  });
};
