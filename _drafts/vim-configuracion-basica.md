---
title: "vim: configuración básica"
date: 2017-12-03 00:30:00 +0100
categories: [artículos, vim, tutorial]
excerpt: Configuración inicial para principiantes (y no tanto) de vim.
permalink: /articulos/vim-configuracion-basica
---
En un [artículo anterior][vim-intro], donde se introducía _vim_, se creó un archivo llamado {% ihighlight shell %}.vimrc{% endihighlight %}. En él se incluía la opción {% ihighlight shell %}set mouse=a{% endihighlight %} para habilitar el ratón. Si no se hubiera insertado esta línea, te verías obligado a introducirla cada vez que arrancaras el programa.

Esto no sería muy engorroso de tratarse de una única opción, pero ¿qué pasaría si introdujeras más ajustes? ¿querrías escribirlos en cada nueva sesión? ¿te acordarías de todos? Obviamente no.

Mediante el archivo {% ihighlight shell %}.vimrc{% endihighlight %} en cada nueva instancia _vim_ lee y ejecuta los comandos incluidos en el mismo secuencialmente, asegurando la persistencia de los ajustes entre sesiones. Además también facilita su legilibilidad al mantener cada opción por línea de texto.

Para poder poblar el archivo de configuración es necesario saber que opciones ofrece _vim_. Así que en el presente artículo se exponen una serie de ajustes para tunearlo. No va a ser una guía exhaustiva con todas las posibilidades de configuración pero si aquellas que he considerado que facilitan el aterrizaje a vim. Por cada una de las opciones se incluye una descripción de su cometido. Algunas explicaciones son más extensas que otras puesto que su dificultad entraña una mayor explicación.

Si quieres hacerte a una idea de cuántas opciones se ofrecen (y no estarían todas) puedes ejecutar el comando [{% ihighlight shell %}:help option-list{% endihighlight %}][help-option-list]. Esto abrirá una ventana con un lista de instrucciones junto a una escueta descripción.

Por último, se incluye el archivo de configuración completo para que puedas ver como queda en conjunto. También lo puedes descargar pero **no recomiendo que lo hagas**. Es mejor que vayas incluyendo uno a uno cada ajuste y compruebes por ti mismo que ha cambiado en _vim_.

Ahora sí, sin más dilación procedamos a estudiar las diferentes opciones.

## Antes de empezar
Tras todo este tiempo usando vim he descubierto que la mejor forma para configurarlo es haciéndolo uno mismo. Hay muchos usuarios que comparten su {% ihighlight shell %}.vimrc{% endihighlight %} por internet y aunque es muy tentador usarlo es recomendable no hacerlo. Al final te encontrarás con una maraña de líneas de comandos que no entenderás porque están ahí. También ocurre lo mismo con los _plugins_, por no haber leído un poco sobre las características de _vim_ al final se acaban instalando _plugins_ que ya existen como funcionalidades integradas, pero este es otro tema. En definitiva, quédate con que las configuraciones de otros usuarios debes usarlas como referencia para crear el tuyo propio.

Aparte de leer que hace cada comando en la documentación, la mejor manera para probarlo es incluir una a una cada opción y ver el resultado. Para ello lo primero es localizar el archivo {% ihighlight shell %}.vimrc{% endihighlight %}. Dependiendo del sistemo operativo el archivo se puede encontrar en diferentes ubicaciones o con diferente nombre. En la siguiente tabla puede verse las diferentes rutas y nombres.

<table class="dashed-table table-full">
  <tbody>
    <tr>
      <td>Unix / Linux<br />Mac OS X</td>
      <td>{% ihighlight shell %}$HOME/.vimrc{% endihighlight %}</td>
    </tr>
    <tr>
      <td>Windows</td>
      <td>
        {% ihighlight shell %}$HOME/_vimrc{% endihighlight %}
        <br />
        {% ihighlight shell %}$VIM/_vimrc{% endihighlight %}
      </td>
    </tr>
  </tbody>
</table>

En ocasiones puedes encontrar que también nombran el archivo {% ihighlight shell %}exrc{% endihighlight %}. Este archivo pertenece al antiguo _vi_ así que no le prestes mucha atención. Puedes saber más sobre esto pinchando [aquí][exrc].

Si nunca has usado _vim_, lo normal es que no exista {% ihighlight shell %}vimrc{% endihighlight %} por lo tanto se debe crear. El mejor método para editar este archivo es accediendo a _vim_ y desde allí ejecutar el siguiente comando.

{% highlight shell %}
:e $MYVIMRC
{% endhighlight %}

Tras ejecutar este comando se abrirá el archivo que se encuentre en la ruta indicada por {% ihighlight shell %}$MYVIMRC{% endihighlight %} (la puedes visualizar ejecutando {% ihighlight shell %}:echo $MYVIMRC{% endihighlight %}). Si este no existe será almacenado en la misma ruta cuando sea guardado.

Antes de empezar a editar el archivo de configuración, sería bueno recordar unos cuantos comandos básicos para poder moverse en el modo normal de _vim_.

<table class="commands-table-description table-full">
<tbody>
<tr>
<td><kbd>i</kbd></td>
<td>Entrar en el modo insert.</td>
</tr>
<tr>
<td><kbd>ESC</kbd></td>
<td>Volver al modo normal.</td>
</tr>
<tr>
<td><kbd>x</kbd></td>
<td>Borrar el carácter justo debajo del cursor.</td>
</tr>
<tr>
<td><kbd>:wq</kbd></td>
<td>Guardar (x) y salir de vim (q).</td>
</tr>
<tr>
<td><kbd>dd</kbd></td>
<td>Borrar la línea actual donde se halla el cursor. También almacena la linea borrada en el portapapeles.</td>
</tr>
<tr>
<td><kbd>yy</kbd></td>
<td>Copia la línea actual en el portapapeles.</td>
</tr>
<tr>
<td><kbd>p</kbd></td>
<td>Pegar el contenido del portapapeles.</td>
</tr>
<tr>
<td><kbd>h</kbd><kbd>j</kbd><kbd>k</kbd><kbd>l</kbd></td>
<td>Comandos de movimiento. En el mismo orden son ←↓↑→.</td>
</tr>
</tbody>
</table>

Para poder saber más sobre cada comando siempre puedes teclear {% ihighlight shell %}:help <comando>{% endihighlight %}.

A continuación puedes ver las opciones con la cuáles completar un {% ihighlight shell %}vimrc{% endihighlight %} inicial junto a una explicación para cada una.

## Opciones
### Globales

{% highlight shell %}
set nocompatible
{% endhighlight %}
Compatibilidad con vi desactivada. Al incluir esta opción evita efectos inesperados debido a diferentes comportamientos entre vi y vim.



[vim-intro]: /articulos/vim-intro 
[help-option-list]: http://vimdoc.sourceforge.net/htmldoc/quickref.html#option-list
[exrc]: https://unix.stackexchange.com/questions/198898/what-is-the-difference-between-exrc-and-vimrc
[nocompatible]: http://vimdoc.sourceforge.net/htmldoc/options.html#'nocompatible'