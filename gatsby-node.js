exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions;
  if (page.path.match(/^\/lolly/)) {
    page.matchPath = "/lolly/*";
    createPage(page);
  }
};
