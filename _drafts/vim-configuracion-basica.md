---
title: "vim: configuración básica"
date: 2017-12-03 00:30:00 +0100
categories: [artículos, vim, tutorial]
excerpt: Configuración inicial para principiantes (y no tanto) de vim.
permalink: /articulos/vim-configuracion-basica
---
En un [artículo anterior][vim-intro], donde se introducía vim, se creó un archivo llamado .vimrc. En él se incluía una línea de configuración para habilitar el ratón ({% ihighlight shell %}set mouse=a{% endihighlight %}). Si no se hubiera insertado esta línea, te verías obligado a introducirla cada vez que arrancaras el programa.

Esto no sería muy engorroso de tratarse de una única opción, pero ¿qué pasaría si introdujeras más ajustes? ¿querrías escribirlos en cada nuevo inicio? ¿te acordarías de todos? Obviamente no. Aunque esto mismo es lo que hace vim con cada nueva sesión. Cada vez que se abre una nueva instancia el programa lee el archivo de configuración y ejecuta todas los comandos secuencialmente asegurando la persistencia de los ajustes. Además de facilitar su legilibilidad al mantener una línea por comando.

En el presente artículo voy a ofrecer una serie de ajustes para tunear vim. No va a ser una guía exhaustiva con todas las posibilidades de configuración pero si aquellas que he considerado que facilitan el aterrizaje a vim. Por cada una de las opciones se incluye una descripción de su cometido. Algunas explicaciones son más extensas que otras puesto que su dificultad entraña una mayor explicación.

Si quieres hacerte a una idea de cuántas opciones se ofrecen (y no estarían todas) puedes ejecutar el comando [{% ihighlight shell %}:help option-list{% endihighlight %}][help-option-list]. Esto abrirá una ventana con un lista de instrucciones junto a una escueta descripción.

Por último, se incluye el archivo de configuración completo para que puedas ver como queda en conjunto. También los puedes descargar pero **no recomiendo que lo hagas**. Es mejor que vayas incluyendo uno a uno cada ajuste y compruebes por ti mismo que ha cambiado en vim.

Ahora sí, sin más dilación procedamos a estudiar las diferentes opciones.

[vim-intro]: /articulos/vim-intro 
[help-option-list]: http://vimdoc.sourceforge.net/htmldoc/quickref.html#option-list