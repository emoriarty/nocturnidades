import React from 'react';
import get from 'lodash/get';
import Helmet from 'react-helmet';
import Header from '../components/Header';
import Posts from '../components/Posts';
import GoodreadsGrid from '../components/GoodreadsGrid';

export default props => {
  const siteTitle = get(props, 'data.site.siteMetadata.title');
  return [
    <Helmet
      key='head'
      title={siteTitle}
    />,
    <Header
      title='About'
    />,
    <p>La idea inicial de este blog es poder publicar y compartir relatos, ideas y tribulaciones varias con toda aquella o aquél que quiera leerlos.</p>,
    <p>El título del blog hace referencia al único momento del día (de la noche) en que los artículos son perpetrados.</p>,
    <p>Todo el contenido del sitio web está bajo licencia <a href='https://creativecommons.org/licenses/by-nc/4.0/deed.es'><i>creative commons</i> sin atribución comercial</a>. Por tanto puedes copiar, modificar, compartir adaptar lo que quieras pero siempre sin fines comerciales y recordando la fuente original.</p>,
		<p>Si deseas ponerte en contacto conmigo, puedes hacerlo a través <a href='mailto:emoriarty81@gmail.com?subject=Desde nocturnidades'>mi correo electrónico</a>.</p>,
		<h2>Que estoy leyendo ahora</h2>,
		<GoodreadsGrid />,
  ];
}

export const pageQuery = graphql`
  query AboutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
