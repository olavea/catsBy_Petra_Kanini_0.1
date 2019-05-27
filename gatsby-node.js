const path = require("path")

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  createPage({
    path: "/jukseArk",
    component: path.resolve("./src/templates/arkLayout.js"),
  })
}
