import React from 'react';
import Link from 'gatsby-link';
import get from 'lodash/get';
import typography, { rhythm, scale } from '../utils/typography';

export default class Posts extends React.Component {
  constructor() {
    super();
    this.renderEntry = this.renderEntry.bind(this);
  }

  render() {
    const { entries } = this.props;
    const style = {
      listStyle: 'none',
      margin: '0',
    };

    return (
      <ul style={style}>
        { entries.map(this.renderEntry) }
      </ul>
    );
  }

  renderEntry({ node }) {
    const {
      fields: { slug },
      frontmatter: { date },
      excerpt,
    } = node;
    const title = get(node, 'frontmatter.title', slug);

    return (
      <li
        key={slug}
        className='entry'
        style={{marginBottom: rhythm(1.25)}}
      >
        <Link
          to={node.fields.slug}
        >
          <h3
            className='entry-title'
            style={{
              lineHeight: rhythm(1.5),
              marginBottom: rhythm(1 / 4),
            }}
          >
            {title}
            <small
              className="entry-date"
              style={scale(-0.5)}
            >
              {node.frontmatter.date}
            </small>
          </h3>
          <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
        </Link>
      </li>
    );
  }
}

