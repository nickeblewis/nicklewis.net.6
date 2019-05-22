import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import WrapperGrid from '../components/WrapperGrid'
import BlogHero from '../components/Blog/BlogHero'
import BlogBody from '../components/Blog/BlogBody'
import BlogList from '../components/Blog/BlogList'
//import SEO from '../components/SEO'

const Blog = ({ data, location }) => {
  const posts = data.allContentfulPost.edges
  const blog = data.contentfulBlog

  return (
    <Layout location={location}>
      <WrapperGrid>
        <BlogHero image={blog.heroImage} />
        <BlogBody>
          
          {posts.map(({ node: post }) => (
            <BlogList
              key={post.id}
              slug={post.slug.current}
              image={post.mainImage}
              title={post.title}
              date={post._createdAt}
              time={5}
              excerpt={post.blurb}
            />
          ))}
        </BlogBody>
      </WrapperGrid>
    </Layout>
  )
}

export const query = graphql`
  query {
    allContentfulPost(
      limit: 1000
      sort: { fields: [publishDate], order: DESC }
    ) {
      edges {
        node {
          title
          id
          slug
          publishDate(formatString: "DD MMM YYYY")
          heroImage {
            title
            fluid(maxWidth: 1000) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
          body {
            childMarkdownRemark {
              html
              excerpt(pruneLength: 240)
              timeToRead
            }
          }
        }
      }
    }
    contentfulBlog {
      title
      id
      heroImage {
        title
        fluid(maxWidth: 1000) {
          ...GatsbyContentfulFluid_withWebp
        }
      }
    }
  }
`

export default Blog
