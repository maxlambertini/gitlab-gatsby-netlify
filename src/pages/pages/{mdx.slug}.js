import * as React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '../../components/layout'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const BlogPost = ({ data }) => {
  const image = getImage(data.mdx.frontmatter.hero_image)
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <h1>Yabba Dabba Dooooooo</h1>
      <p>{data.mdx.frontmatter.date}</p>
      <GatsbyImage  
        image={image}
        alt={data.mdx.frontmatter.hero_image_alt}
        ></GatsbyImage>
      <MDXRenderer>
        {data.mdx.body}
      </MDXRenderer>
    </Layout>
  )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
      }
      body
    }
  }
`

export default BlogPost