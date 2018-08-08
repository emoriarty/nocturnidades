import React from 'react'
import { rhythm } from '../utils/typography'
import styled from 'styled-components'

const Footer = styled.footer`
  margin-top: ${rhythm(2)};
`
const Img = styled.img`
  border-width: 0;
  margin-bottom: 0;
`

export default () => (
  <Footer>
    <a rel="license" href="http://creativecommons.org/licenses/by-nc/4.0/">
      <Img
        alt="Creative Commons Licence"
        src="https://i.creativecommons.org/l/by-nc/4.0/80x15.png"
      />
    </a>
  </Footer>
)
