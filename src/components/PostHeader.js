import React from 'react'
import Link from 'gatsby-link'
import Menu from '../components/Menu'
import { rhythm, scale } from '../utils/typography'
import { styles as headerStyles } from './Header'
import styled from 'styled-components'
import { Header, HeaderTitle } from './Header'

const PostHeader = styled.header`
  margin-bottom: ${rhythm(1)};
  @media (min-width: 480px) {
    text-align: center;
  }  
`

const PostTitle = styled.h1`
  ${scale(1.2)};
  margin-top: 0;
  margin-bottom: ${rhythm(1 / 3)};
`

const PostDate = styled.p`
  ${scale(-1 / 5)};
  display: block;
`

export default ({ classes, title, date }) => (
  <PostHeader>
    <PostTitle>{title}</PostTitle>
    <PostDate>{date}</PostDate>
  </PostHeader>
)
