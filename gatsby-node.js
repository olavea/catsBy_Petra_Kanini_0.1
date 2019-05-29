const path = require("path")

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                sidetall
              }
            }
          }
        }
      }
    `).then(results => {
      results.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
          //          path: "/jukseside",
          //          path: node.frontmatter.sidetall,
          component: path.resolve("./src/templates/arkLayout.js"),
          context: {
            slug: node.frontmatter.sidetall,
          },
        })
      })
      resolve()
    })
  })
}
