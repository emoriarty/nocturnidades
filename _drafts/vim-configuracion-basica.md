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

## Global

### [{% ihighlight shell %}set nocompatible{% endihighlight %}][nocompatible]

Compatibilidad con _vi_ desactivada. Al incluir esta opción evita efectos inesperados debido a diferentes comportamientos entre _vi_ y _vim_.

Esta opción se desactiva por defecto cuando _vim_ se topa con un archivo {% ihighlight shell %}.vimrc{% endihighlight %} al inicio. El hecho de forzar su uso es para evitar la sobrescritura de las opciones por defecto como en el caso de usar el argumento {% ihighlight shell %}-C{% endihighlight %} al arrancar _vim_. Este forzaría el modo compatible aunque encuentre un {% ihighlight shell %}.vimrc{% endihighlight %}. Para evitar esta situación solo basta con incluir la opción {% ihighlight shell %}nocompatible{% endihighlight %}.

Piensa en esta opción como una salvaguarda para evitar posibles conflictos.

### [{% ihighlight shell %}set encoding=utf-8{% endihighlight %}][encoding]

Establece la codificación de caracteres a {% ihighlight shell %}UTF-8{% endihighlight %}.  Básicamente es la codificación de salida que veremos en el terminal. También lo utiliza internamente para escribir en archivos como [{% ihighlight shell %}viminfo{% endihighlight %}][viminfo], donde se almacena información que de otra manera se perdería tales como marcas, patrones de búsqueda, historial de comandos, etc.

Los archivos editados no sufrirán ningún cambio en su codificación al ser guardados. Si por el contrario deseas cambiar este comportamiento deberías usar la opción [{% ihighlight shell %}set fileencoding=utf-8{% endihighlight %}][fileencoding]. Esta instrucción indica a vim modificar la codificación del archivo cuando se guarda.

La elección del formato {% ihighlight shell %}UTF-8{% endihighlight %} es debido a que es el más común entre sistemas, así que para qué cambiarlo.

### [{% ihighlight shell %}set showcmd{% endihighlight %}][showcmd]

Muestra parcialmente el comando que se está usando actualmente. Aparece en la esquina inferior derecha como se muestra en la siguiente imagen.

{% progressive_picture
  thumbnail: /assets/vim-config-1.thumb.jpg
  src: /assets/vim-config-1.jpg
  height: 383
  width: 600
  alt: 'showcmd en acción.' %}
  
En este caso se ha introducido el verbo —_**d**elete_—, el modificador —_**a**_— y queda en espera del sustantivo (objeto) que podría ser una palabra —_**w**ord_—. Tras introducir este último desaparece la ayuda visual.

### [{% ihighlight shell %}set showmode{% endihighlight %}][showmode]
Indica en el modo actual en la línea de comando excepto en modo _normal_.

### [{% ihighlight shell %}set visualbell{% endihighlight %}][visualbell]
Cambia la alerta sonora por una visual. En algunas ocasiones esta alerta puede estar sujeta a la configuración del terminal donde se ejecute por lo tanto deberías modificar los ajustes del terminal.

### [{% ihighlight shell %}set history=50{% endihighlight %}][history]
Número de comandos que _vim_ almacena. Por defecto es 20. He preferido dejarlo en 50 aunque puedes poner el que quieras.

### [{% ihighlight shell %}set autoread{% endihighlight %}][autoread]
Actualiza automáticamente los archivos que estén abiertos y hayan sido modificados fuera de _vim_. Aunque esta solución no funciona a no ser que un comando externo se ejecute como {% ihighlight shell %}:ls!{% endihighlight %} o cualquier otro.

### [{% ihighlight shell %}set backspace=eol,start,indent{% endihighlight %}][backspace]
El botón de retroceso (backspace) se comporta como en cualquier editor

### [{% ihighlight shell %}set hidden{% endihighlight %}][hidden]
Oculta los _buffers_ (un _buffer_ no es más que una copia del archivo en memoria) automáticamente al abandonarlos. También permite ocultar un _buffer_ incluso habiendo sido modificado sin guardar los cambios en disco.

### [{% ihighlight shell %}let mapleader=" "{% endihighlight %}][mapleader]
Permite definir una cadena de texto para poder ejecutar comandos sin pasar por la consola de _vim_. Un ejemplo podría ser usando el carácter espacio ({% ihighlight shell %}“ ”{% endihighlight %}) que en combinación con {% ihighlight shell %}w{% endihighlight %} ({% ihighlight shell %}<leader>w{% endihighlight %}) sería el equivalente a escribir {% ihighlight shell %}:w{% endihighlight %} en la consola.

Por convención se suele establecer la coma ({% ihighlight shell %},{% endihighlight %}) como carácter _leading_ pero yo me siento más cómodo con el espacio. Tú puedes elegir uno de los dos o el que prefieras, no en vano la característica más importante de vim es que su alta personalización.

Estas combinaciones se consiguen mediante el [mapeo de claves][keymapping] (key mapping) para crear nuevos comandos pero eso lo veremos más adelante. De momento recuerda que que hemos definido el {% ihighlight shell %}mapleader{% endihighlight %} como un espacio.

<script src="https://gist.github.com/emoriarty/0241dc249fb5605f32ee66345165edfd.js"></script>

[vim-intro]: /articulos/vim-intro 
[help-option-list]: http://vimdoc.sourceforge.net/htmldoc/quickref.html#option-list
[exrc]: https://unix.stackexchange.com/questions/198898/what-is-the-difference-between-exrc-and-vimrc
[nocompatible]: http://vimdoc.sourceforge.net/htmldoc/options.html#'nocompatible'
[encoding]: http://vimdoc.sourceforge.net/htmldoc/options.html#'encoding'
[viminfo]: http://vimdoc.sourceforge.net/htmldoc/usr_21.html#21.3
[fileencoding]: http://vimdoc.sourceforge.net/htmldoc/options.html#'fileencoding'
[showcmd]: http://vimdoc.sourceforge.net/htmldoc/options.html#'showcmd'
[showmode]: http://vimdoc.sourceforge.net/htmldoc/options.html#'showmode'
[visualbell]: http://vimdoc.sourceforge.net/htmldoc/options.html#'visualbell'
[history]: http://vimdoc.sourceforge.net/htmldoc/options.html#'history'
[autoread]: http://vimdoc.sourceforge.net/htmldoc/options.html#'autoread'
[backspace]: http://vimdoc.sourceforge.net/htmldoc/options.html#'backspace'
[hidden]: http://vimdoc.sourceforge.net/htmldoc/options.html#'hidden'
[mapleader]: http://vimdoc.sourceforge.net/htmldoc/map.html#mapleader
[keymapping]: http://vimdoc.sourceforge.net/htmldoc/map.html#mapping