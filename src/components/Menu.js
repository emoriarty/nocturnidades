import React from 'react'
import Link from 'gatsby-link'
import {
  rhythm,
  scale,
  ternaryColor,
  quaternaryColor,
  headerFontFamily,
} from '../utils/typography'
import styled from 'styled-components'

const Nav = styled.nav`
  ${scale(-0.25)};
  margin-bottom: ${rhythm(3 / 4)};
  height: ${rhythm(1.37)};
`

const NavHome = styled(Link)`
  text-decoration: none;
  display: inline-block;
  width: ${rhythm(4.8)};
  margin-right: ${rhythm(0.5)};
  & + ul {
    width: calc(100% - ${rhythm(5.3)});
  }
`

const NavHomeTitle = styled.span`
  font-family: ${headerFontFamily.join(',')};
  padding: ${rhythm(1 / 8)} ${rhythm(3 / 8)};
  border: 1px solid;
  transition: width 0.2s ease-in 0.1s;
  overflow: hidden;
  display: inline-block;
  vertical-align: middle;
  white-space: nowrap;
  width: ${rhythm(1.25)};
  &:hover {
    width: ${rhythm(4.75)};
    transition: width 0.2s ease-out;
    & span {
      transition: opacity 0.2s ease-out 0.1s;
      opacity: 1;
    }
  }
`

const NavHomeInnerTitle = styled.span`
  transition: opacity 0.2s ease-in;
  opacity: 0;
`

const NavList = styled.ul`
  height: ${rhythm(1.37)};
  list-style: none;
  margin: 0;
  display: inline-block;
  width: 100%;
  text-align: right;
  vertical-align: super;
`

const NavItem = styled.li`
  display: inline;
  margin-left: ${rhythm(1)};
`

const NavLink = styled(Link)`
  text-decoration: none;
  color: ${ternaryColor};
`

export default ({ classes, home }) => (
  <Nav>
    {typeof document !== 'undefined' &&
      document.location.pathname !== '/' && (
        <NavHome to="/">
          <NavHomeTitle>
            N
            <NavHomeInnerTitle>octurnidades</NavHomeInnerTitle>
          </NavHomeTitle>
        </NavHome>
      )}
    <NavList>
      <NavItem>
        <NavLink to="about">About</NavLink>
      </NavItem>
    </NavList>
  </Nav>
)
