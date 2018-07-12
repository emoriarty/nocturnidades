import React from 'react';
import get from 'lodash/get';
import { rhythm, scale } from '../utils/typography';
import Header from '../components/Header';

export default class Template extends React.Component {
  render() {
    const { children, data } = this.props
    return (
      <div
        style={{
          marginLeft: 'auto',
          marginRight: 'auto',
          maxWidth: rhythm(24),
          padding: `${rhythm(2)} ${rhythm(3 / 4)}`,
        }}
      >
        <Header
          title={ get(data, 'site.siteMetadata.title') }
        />
        { children() }
      </div>
    )
  }
}


export const query = graphql`
  query HeaderQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

