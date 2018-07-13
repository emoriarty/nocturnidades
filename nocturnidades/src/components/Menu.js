import React from 'react';
import Link from 'gatsby-link';
import { rhythm, scale, ternaryColor, quaternaryColor } from '../utils/typography'

export default ({ style }) => {
	const listStyle = {
		listStyle: 'none',
		margin: 0,
	};
	const entryStyle = {
		display: 'inline',
		marginRight: rhythm(1),
	};
	const linkStyle = {
		textDecoration: 'none',
		color: ternaryColor,
	};
  return (
    <nav
			style={{
				borderTop: `1px solid ${quaternaryColor}`,
				borderBottom: `1px solid ${quaternaryColor}`,
				...style,
			}}	
		>
      <ul style={listStyle}>
        <li style={entryStyle}>
					<Link to='/' style={linkStyle}>Inicio</Link>
				</li>
        <li style={entryStyle}>
					<Link to='about' style={linkStyle}>About</Link>
				</li>
      </ul>
    </nav>
  );
}

