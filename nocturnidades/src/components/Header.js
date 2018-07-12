import React from 'react';
import Link from 'gatsby-link';
import { rhythm, scale } from '../utils/typography'

export default ({ title }) => (
  <header
    style={{
      marginBottom: rhythm(2),
    }}
  >
    <h1
      style={{
        ...scale(1.2),
        marginTop: 0,
        marginBottom: 0,
      }}
    >
      <Link to='/'>
        { title }
      </Link>
    </h1>
  </header>
);

