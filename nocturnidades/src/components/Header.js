import React from 'react';
import Link from 'gatsby-link';
import Menu from '../components/Menu';
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
      	marginBottom: rhythm(1/2),
				textAlign: 'center',
      }}
    >
      <Link to='/'>
        { title }
      </Link>
    </h1>
		<Menu />
  </header>
);

