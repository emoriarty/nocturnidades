import React from 'react'
import Link from 'gatsby-link'
import Menu from '../components/Menu'
import { rhythm, scale } from '../utils/typography'
import styled from 'styled-components'

export const Header = styled.header`
  margin-bottom: ${rhythm(2)};
  @media (min-width: 480px) {
    text-align: center;
  }
`

export const HeaderTitle = styled.h1`
  ${scale(1.2)};
  margin-top: 0;
  margin-bottom: ${rhythm(1)};
`

export default ({ classes, title }) => (
  <Header>
    <HeaderTitle>{title}</HeaderTitle>
  </Header>
)
