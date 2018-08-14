import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import get from 'lodash/get'
import { rhythm, scale } from '../utils/typography'
import PostHeader from '../components/PostHeader'
import styled from 'styled-components'

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
  padding: 0;
`

const Hr = styled.hr`
  margin-bottom: ${rhythm(1)};
`

const Post = styled.div`
  p {
    text-indent: 1rem;
    margin-bottom: .54rem;
  }

  p:first-child {
    text-indent: 0;
  }

  br + p {
    text-indent: 0;
  }
`

export default props => {
  const post = props.data.markdownRemark
  const siteTitle = get(props, 'data.site.siteMetadata.title')
  const { previous, next } = props.pathContext

  return (
    <div>
      <Helmet title={`${post.frontmatter.title} | ${siteTitle}`} />
      <PostHeader title={post.frontmatter.title} date={post.frontmatter.date} />
      <Post dangerouslySetInnerHTML={{ __html: post.html }} />
      <Hr />
      <List>
        <li>
          {previous && (
            <Link to={previous.fields.slug} rel="prev">
              ← {previous.frontmatter.title}
            </Link>
          )}
        </li>
        <li>
          {next && (
            <Link to={next.fields.slug} rel="next">
              {next.frontmatter.title} →
            </Link>
          )}
        </li>
      </List>
    </div>
  )
}

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        date(formatString: "DD MMMM YYYY", locale: "es")
      }
    }
  }
`
