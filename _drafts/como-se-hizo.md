---
layout: post
title: Como construir tu propio blog con Jekyll
categories: tecnología taller
description: 
---
En este artículo voy a explicar cómo puedes crear tu propio blog. El mismo lo he concebido como un taller donde podrás ver paso a paso desde la instalación de las herramientas necesarias hasta poder «colgar» tu página en internet. 

Antes de empezar debo advertirte que para la realización del taller, son necesarios unos mínimos conocimientos en _[HTML][html]_, _[CSS][css]_ y programación en _[Javascript][js]_, ya que la finalidad del artículo no es solo publicar contenido sino tener un completo control de la página web para poder modificar su aspecto, añadir las todas páginas que quieras, incluir _widgets_ como los libros que estás leyendo, etcétera. Tampoco es necesario ser un experto, ya que cómo verás el programa que vamos a usar ofrece unos diseños predefinidos con los que podrás empezar. Me gustaría también recalcar que no voy a profundizar en las tecnologías mencionadas. Si sigues interesado o interesada por tener un mejor dominio de las mismas, te recomiendo que eches un vistazo a los tutoriales que hay en [librosweb][librosweb]. Aunque también hay muchos recursos en internet que te pueden ayudar. A continuación pongo unos ejemplos encontrados en _google_ con las palabras «curso de html y css». Todos están escritos en castellano.

* [https://devcode.la/cursos/html-css/][web-course-1]
* [https://www.codecademy.com/es/tracks/html-css-traduccion-al-espanol-america-latina-clone][web-course-2]
* [http://www.aulafacil.com/cursos/t2204/informatica/crear-paginas-web/html][web-course-3]
* [http://blogthinkbig.com/20-cursos-programacion-gratuitos-tomar-linea/][web-course-4]

Lo que si haré, en la medida de lo que me sea posible, es aportar explicaciones sobre conceptos informáticos que considere necesarios para un mejor entendimiento en la creación de páginas web. Así que si eres de esos que no te asusta ensuciarte las manos y te gusta saber cómo están hechas las cosas (una página web en este caso) entonces sigue leyendo. En caso contrario, si lo único que deseas es publicar contenido en un blog y no te importa el aspecto del contenedor, lo mejor es busques otras opciones como pueda ser _[medium][medium]_ o _[wordpress][wordpress]_.

Por cierto, un apunte importante, para el desarrollo de este taller he usado un sistema _MacOS_ pero lo mismo sirve para _Unix/Linux_. Cuando sea necesario también incluiré cómo hacerlo con _Windows_.

Por último, si os interesa podéis leer las [motivaciones][motivaciones] que me han llevado a crear este blog. Probablemente que tu tengas otras distintas y aunque no sean las mismas ni sepa cuáles son, sí hay una cosa es cierta: si estás leyendo este artículo es porque estás pensando en crear un blog. Así que sin más dilación empecemos con el taller.

## Consideraciones antes de empezar una página web
Al principio estuve valorando si utilizar un servicio de publicación de blogs o crear el mío propio. De los primeros hay muy buenos, cómo puede ser [medium][medium], pero no dejan mucho margen para la personalización de la página. Aunque cada vez estos ofrecen más opciones de adaptación, cómo cambiar el color de la cabecera o añadir un logo propio. La idea de una estructura y diseño impuestos no me pareció atractiva, de tal manera que me decidí por la segunda opción. Aunque siendo ésta mucho más versátil, cierto es que me daba mucha pereza tener que hacerlo todo desde cero. Al final opté por una tercera vía: utilizar un [generador de páginas estáticas][web-sites-generator].

Lo interesante de un generador es que puedes redactar los artículos en archivos de texto plano y de fácil lectura, evitando las distracciones que un archivo _HTML_ puede acarrear. Aunque esto no es del todo cierto, os aseguro que es mucho más sencillo que escribir un texto de dos mil palabras en un _HTML_.

Cuando utilizo el término __página estática__, no quiero decir que se quede congelada y ni tan siquiera se pueda hacer _[scroll][scroll]_. Lo que expresa es que no habrá ningún tipo de interacción con el servidor más que devolver la página requerida. Es decir, no habrá ninguna base de datos ni servicios web desde donde recuperar la información necesaria para construir la página por cada petición de usuario. A este tipo de página web se le denomina __página dinámica__. Para el asunto de los servicios web, bien hay que remarcar que se pueden utilizar desde otros servidores pero para esto será necesario el uso de librerías Javascript. En definitiva, una página estática es un archivo permanente que devolverá el servidor sin tener que recopilar los datos para construirla. Para saber más puede mirar en este [enlace][pag-sta-dyn].

Hay una amplia oferta de [generadores][generators]. Cual utilices dependerá de tus conocimientos, el lenguaje en el que haya sido creado y la experiencia que hayas tenido con alguno. Pero al final cualquiera de estas herramientas requerirán, en mayor o menor medida, tener algunos conocimiento en _HTML_, _CSS_ y _Javascript_. Personalmente recomiendo siempre optar entre las cinco más usadas y entre estas las que mayor soporte tengan por parte de la comunidad que las mantenga.

De entre todas la opciones posibles al final me decidí por _[Jekyll][jekyll]_, aunque también estuve considerando _[middleman][middleman]_. _Jekyll_ lleva mucho tiempo siendo desarrollado, lo cual nos da la seguridad de que los posibles errores de diseño ya fueron solventados hace mucho. En el momento de la edición de este artículo, la última versión disponible es la [3.4.1][jekyll-current-version]. Otra buena razón por la que lo elegí es que un sitio web cómo [Github][github-pages] lo utiliza como motor interno para la generación de páginas estáticas. Lo que nos asegura un continuo mantenimiento además de ofrecer una buena documentación. Cómo curiosidad, la misma herramienta fue creada por [uno de los co-fundadores][github-co-founder] de Github.

En definitiva, todo lo que necesitarás será lo siguiente:
* un ordenador con acceso a consola de comandos (todos lo tienen),
* _[ruby][ruby]_,
* _jekyll_,
* _[git][git]_,
* y un editor de textos: _[visual studio code][code]_, _[sublime][sublime]_, _[atom][atom]_, _[vim][vim]_, _[notepad++][notepad]_, etc...

No te preocupes si no conoces alguno de los puntos en el listado anterior, los explicaré más adelante. Así que ya teniendo claro que es lo que necesitamos, procedamos a hacer la instalación.

## Instalación

[html]: https://es.wikipedia.org/wiki/HTML5
[css]: https://es.wikipedia.org/wiki/Hoja_de_estilos_en_cascada
[js]: https://es.wikipedia.org/wiki/JavaScript
[web-course-1]: https://devcode.la/cursos/html-css/
[web-course-2]: https://www.codecademy.com/es/tracks/html-css-traduccion-al-espanol-america-latina-clone
[web-course-3]: http://www.aulafacil.com/cursos/t2204/informatica/crear-paginas-web/html
[web-course-4]: http://blogthinkbig.com/20-cursos-programacion-gratuitos-tomar-linea/
[medium]: https://medium.com/
[wordpress]: https://es.wordpress.com/
[librosweb]: http://librosweb.es
[motivaciones]: /motivaciones
[scroll]: https://es.wikipedia.org/wiki/Scroll
[pag-sta-dyn]: https://es.wikipedia.org/wiki/P%C3%A1gina_web#P.C3.A1ginas_est.C3.A1ticas_versus_p.C3.A1ginas_din.C3.A1micas
[generators]: https://github.com/pinceladasdaweb/Static-Site-Generators
[jekyll]: http://jekyllrb.com/
[github-pages]: https://pages.github.com/
[ruby]: https://www.ruby-lang.org/es/
[git]: https://git-scm.com/
[code]: https://code.visualstudio.com/
[sublime]: https://www.sublimetext.com/
[atom]: https://atom.io/
[vim]: http://www.vim.org/
[notepad]: https://notepad-plus-plus.org/
[web-sites-generator]: https://jsjutsu.com/blog/2015/12/generadores-web-estaticas/
[middleman]: https://middlemanapp.com/
[jekyll-current-version]: https://jekyllrb.com/news/2017/03/02/jekyll-3-4-1-released/
[github-co-founder]: https://en.wikipedia.org/wiki/Tom_Preston-Werner