import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout'

const SimplePage = ({ data }) => {
  return (
    <Layout pageTitle="Other Pages">
      {
        data.allMdx.nodes.map(node => (
          <article key={node.id}>
            <h2>
              <Link to={`/pages/${node.slug}`}>
                {node.frontmatter.title}
              </Link>
            </h2>
          </article>
        ))
      }
    </Layout>
  )
}

export const query = graphql`
query {
  allMdx(
    filter: {fileAbsolutePath: {regex: "/pages/pages/"}}
    sort: {fields: frontmatter___date, order: DESC}) {
    nodes {
      frontmatter {
        date(formatString: "MMMM D, YYYY")
        title
      }
      id
      slug
    }
  }
}
`

export default SimplePage