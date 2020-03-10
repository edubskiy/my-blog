import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (

  <Layout>
    <SEO title="Home" />
    <div>
      <h1>Developer Thoughts</h1>
      <h4>{data.allMarkdownRemark.totalCount}</h4>
      {
        data.allMarkdownRemark.edges.map(({ node }) => {
          return (
            <div key={node.id}>
              <span>
                {node.frontmatter.title} - {node.frontmatter.date}
                <p>{node.excerpt}</p>
              </span>
            </div>
          )
        })
      }
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query MyQuery {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            date
            description
            title
          }
          html
          excerpt
        }
      }
    }
  }
`
