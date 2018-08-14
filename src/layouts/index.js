import React from 'react'
import get from 'lodash/get'
import { rhythm } from '../utils/typography'
import Menu from '../components/Menu'
import Footer from '../components/Footer'
import styled from 'styled-components'

const Layout = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: ${rhythm(24)};
  padding: ${rhythm(3 / 4)};
`

export default class Template extends React.Component {
  render() {
    const { children, data } = this.props
    const siteTitle = get(data, 'site.siteMetadata.title')

    return (
      <Layout>
        <Menu />
        {children()}
        <Footer />
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
