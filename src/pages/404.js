import React from 'react'
import get from 'lodash/get'
import filter from 'lodash/filter'
import map from 'lodash/map'
import Header from '../components/Header'

export default ({ data }) => {
  const files = map(get(data, 'allMarkdownRemark.edges'), file => ({
    ...file.node.fields,
    ...file.node.frontmatter,
  }))
  const posts = filter(files, file => file.slug.match(/articulos\/.*/))
  const tales = filter(files, file => file.slug.match(/relatos\/.*/))

  return (
    <div>
      <Header title="Página no encontrada" />
      <p>
        Quizás alguna la puedas encontrar en la lista de abajo o algún otro
        artículo o relato que te interese.
      </p>
      <p>
        También puede navegar hasta la <a href="/">página de inicio</a>.
      </p>
      <h2>Artículos</h2>
      <ul>
        {posts.map(post => (
          <li>
            <a href={post.slug}>{post.title}</a>
          </li>
        ))}
      </ul>
      <h2>Relatos</h2>
      <ul>
        {tales.map(tale => (
          <li>
            <a href={tale.slug}>{tale.title}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export const notFountQuery = graphql`
  query NotFound {
    allMarkdownRemark {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`
