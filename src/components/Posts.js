import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import {
  rhythm,
  scale,
  bodyFontFamily,
  backgroundColor,
  bodyColor,
} from '../utils/typography'
import styled from 'styled-components'

const Entry = styled.li`
  margin-bottom: ${rhythm(1.25)};
`

const EntryLink = styled(Link)`
  box-shadow: none;
  display: block;
  text-decoration: none;
  &:hover > *:first-child {
    color: ${backgroundColor};
    background-color: ${bodyColor};
  },
`

const EntryTitle = styled.h3`
  transition: all 0.2s ease;
  line-height: ${rhythm(1.5)};
  margin-bottom: ${rhythm(1 / 4)};
`

const EntryData = styled.small`
  float: right;
  font-family: ${bodyFontFamily.join(',')};
  font-weight: normal;
  ${scale(-0.5)};
`

const EntryList = styled.ul`
  list-style: none;
  margin: 0;
`

export default class Posts extends React.Component {
  constructor() {
    super()
    this.renderEntry = this.renderEntry.bind(this)
  }

  render() {
    const { entries } = this.props
    return <EntryList>{entries.map(this.renderEntry)}</EntryList>
  }

  renderEntry({ node }) {
    const { classes } = this.props
    const {
      fields: { slug },
      frontmatter: { date },
      excerpt,
    } = node
    const title = get(node, 'frontmatter.title', slug)

    return (
      <Entry key={slug}>
        <EntryLink to={node.fields.slug}>
          <EntryTitle>
            {title}
            <EntryData>{node.frontmatter.date}</EntryData>
          </EntryTitle>
          <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
        </EntryLink>
      </Entry>
    )
  }
}
