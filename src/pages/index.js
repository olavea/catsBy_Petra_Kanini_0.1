import React, { Component } from "react"
import { Link, graphql } from "gatsby"

import buttonBirdyTop from "../images/LillianUnicornNextPage.png"

// import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
// const { markdownRemark } = this.props.data
// const currentPage = markdownRemark.frontmatter.sidetall

// const prevPage = currentPage - 1 === 0 ? "/" : (currentPage - 1).toString()
// // const linkToPrevPage = `/bookpage/${prevPage}`

// var conCurrentPage = Number(currentPage)
const nextPage = 1

const IndexPage = () => (
  <>
    <SEO title="Geir G" />

    <ul
      style={{
        background: `pink`,
        display: `flex`,
        flexWrap: `wrap`,
        justifyContent: `space-between`,
        listStyle: `none`,

        margin: 0,
        marginBottom: 0,
      }}
    >
      <li>
        <Link to="/about" rel="prev">
          ← about
        </Link>
      </li>
      <li>
        {nextPage && (
          <Link to={`/${nextPage}`} rel="next">
            {nextPage} →
          </Link>
        )}
      </li>
    </ul>

    <div style={{ maxWidth: `1224`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <ul
      style={{
        background: `pink`,
        display: `flex`,
        flexWrap: `wrap`,
        justifyContent: `space-between`,
        listStyle: `none`,

        margin: 0,
        marginBottom: 0,
      }}
    >
      <li>
        <Link to="/about" rel="prev">
          ← about
        </Link>
      </li>
      <li>
        {nextPage && (
          <Link to={`/${nextPage}`} rel="next">
            <img
              style={{
                width: "333px",
                background: `pink`,
              }}
              src={buttonBirdyTop}
              alt="Unicorn button bottom"
            />
          </Link>
        )}
      </li>
    </ul>
    <h1> .</h1>
  </>
)

export default IndexPage
