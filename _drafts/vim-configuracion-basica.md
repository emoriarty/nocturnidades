---
title: "vim: configuración inicial"
date: 2017-12-03 00:30:00 +0100
categories: [artículos, vim, tutorial]
excerpt: Configuración inicial para principiantes (y no tanto) de vim.
permalink: /articulos/vim-configuracion-inicial
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

## General

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

## Interfaz

### [{% ihighlight shell %}set ruler{% endihighlight %}][ruler]
Muestra la posición del cursor y si hay espacio también la posición relativa de la página expresada en porcentaje. Puedes configurar cómo el formato mediante la opción [{% ihighlight shell %}rulerformat{% endihighlight %}][rulerformat].

### [{% ihighlight shell %}set relativenumber{% endihighlight %}][relativenumber]
Activa los números de línea relativos a la posición actual del cursor. Esto es de gran utilidad cuando se utilizan comandos de movimiento verticales.

Imagina que quieres seleccionar hasta una línea de texto superior. En vez de tener que contarlas tan sólo mirando el número indicado a la izquierda de la línea en cuestión ya sabrás que distancia se encuentra. Por ejemplo, si fuesen doce líneas introducirías lo siguiente: <kbd>V</kbd><kbd>1</kbd><kbd>2</kbd><kbd>k</kbd>.

Pero si por el contrario solamente quieres ver la posición absoluta debes utilizar la opción [{% ihighlight shell %}number{% endihighlight %}][number].

### [{% ihighlight shell %}set numberwidth=2{% endihighlight %}][numberwidth]
Establece el número de columnas destinado para mostrar los números de líneas de texto. Normalmente no es necesario más de dos si se ha usado la opción {% ihighlight shell %}relativenumber{% endihighlight %}.

### [{% ihighlight shell %}set cursorline{% endihighlight %}][cursorline]
Resalta la línea donde se halla actualmente el cursor. Dependiendo del tema usado puede resaltar la misma cambiando el color de fondo o subrayándola.

### [{% ihighlight shell %}set nowrap{% endihighlight %}][nowrap]
Permite que las líneas de texto sobresalgan más allá del ancho de la ventana. En su versión por defecto —{% ihighlight shell %}wrap{% endihighlight %}— la parte que estuviera oculta de la línea saltaría un posición.

### [{% ihighlight shell %}set lazyredraw{% endihighlight %}][lazyredraw]
Mejora el rendimiento del programa al evitar redibujar la pantalla durante la ejecución de macros, registros u cualquier otro comando que no tenga efecto sobre el texto. Se puede forzar el refresco usando la instrucción [{% ihighlight shell %}:redraw{% endihighlight %}][redraw].

## _Scrolling_

### [{% ihighlight shell %}set scrolloff=8{% endihighlight %}][scrolloff]

El desplazamiento (_scrolling_) comienza ocho líneas antes que el cursor alcance el borde superior o inferior de la ventana. Permite revelar el contenido que rodea la posición actual, que de otra manera quedaría oculto por los límites de la ventana.

### [{% ihighlight shell %}set sidescrolloff=16{% endihighlight %}][sidescrolloff]

Al igual que {% ihighlight shell %}scrolloff{% endihighlight %} pero en el plano horizontal. En este caso lo he ajustado al doble que el desplazamiento vertical.

### [{% ihighlight shell %}set sidescroll=1{% endihighlight %}][sidescroll]

Ajusta el desplazamiento horizontal a una columna. Esto tiene un impacto directo en el rendimiento por lo tanto si trabajas en un entorno limitado se puede ajustar a {% ihighlight shell %}0{% endihighlight %} (o no ajustar puesto que su valor por defecto es {% ihighlight shell %}0{% endihighlight %}), desplazando la mitad de la ventana para mantener el cursor en el centro.

Si quieres saber más sobre scrolling puedes leer en el manual de usuario los siguientes artículos, [{% ihighlight shell %}:help scrolling{% endihighlight %}][scrolling] y [{% ihighlight shell %}:help slow-terminal{% endihighlight %}][slow-terminal].

## Sangría (_Indetación_)

### [{% ihighlight shell %}set tabstop=2{% endihighlight %}][tabstop]

Número de espacios que se insertan al tabular, en este caso 2. Otra opción es mantener la configuración inicial de _vim_ (por defecto son 8) y usar la propiedad[{% ihighlight shell %} softtabstop{% endihighlight %}][softtabstop] a 2, lo que mostraría cualquier tabulación a 2 pero internamente seguiría siendo 8.

### [{% ihighlight shell %}set shiftwidth=2{% endihighlight %}][shiftwidth]

Número de espacios usados en la sangría (y no, no tiene nada que ver con la bebida). Al igual que tabstop, por defecto su valor es 8.

### [{% ihighlight shell %}set expandtab{% endihighlight %}][expandtab]

Fuerza el uso de espacios en el carácter para tabular. Se puede forzar la tabulación usando <kbd>CTRL</kbd><kbd>V</kbd><kbd>Tab</kbd>.

### [{% ihighlight shell %}set smarttab{% endihighlight %}][smarttab]

Utiliza el valor especificado en la opción {% ihighlight shell %}shiftwidth{% endihighlight %} para tabular el inicio de una línea de texto, para el resto se usa la propiedad {% ihighlight shell %}tabstop{% endihighlight %}.

### [{% ihighlight shell %}set autoindent{% endihighlight %}][autoindent]

Aplica la sangría automáticamente cuando al inicio de una nueva línea, copiando la sangría de la línea anterior.

### [{% ihighlight shell %}set smartindent{% endihighlight %}][smartindent]

La sangría automática se hace en función al estilo/sintaxis del tipo de archivo que se edita(especialmente para C). Se usa en combinación con autoindent.

Puedes encontrar información más detallada leyendo la sección [{% ihighlight shell %}:help ins-expandtab{% endihighlight %}][insexpandtab] en el manual de usuario.

## Completado

### [{% ihighlight shell %}set wildmenu{% endihighlight %}][wildmenu]

Mejora el completado de la línea de comandos, mostrando un menú con las opciones disponibles justo encima. El comando para mostrar las posibles opciones se ajusta mediante la propiedad [{% ihighlight shell %}wildchar{% endihighlight %}][wildchar], por defecto es <kbd>tab</kbd>. Se puede navegar entre los resultados bien usando <kbd>tab</kbd>, las flechas o <kbd>Ctrl</kbd><kbd>P</kbd> <kbd>Ctrl</kbd><kbd>N</kbd>.

Si la propiedad [{% ihighlight shell %}wildmode{% endihighlight %}][wildmode] se modifica y no contiene la opción {% ihighlight shell %}full{% endihighlight %}, {% ihighlight shell %}wildmenu{% endihighlight %} no se mostrará. Por defecto su valor es {% ihighlight shell %}full{% endihighlight %}, lo que permite navegar por los resultados secuencialmente.

## Búsqueda

### [{% ihighlight shell %}set ignorecase{% endihighlight %}][ignorecase]

Permite realizar búsquedas de palabras sin tener en cuenta mayúsculas y minúsculas (_case-sensitive_).

### [{% ihighlight shell %}set smartcase{% endihighlight %}][smartcase]

Cuando el patrón de búsqueda contiene alguna mayúscula su comportamiento es estricto, distinguiendo entre mayúsculas de minúsculas.

### [{% ihighlight shell %}set hlsearch{% endihighlight %}][hlsearch]

Destaca todas las coincidencias del patrón de búsqueda en cuestión.

### [{% ihighlight shell %}set incsearch{% endihighlight %}][incsearch]

La búsqueda se realiza incrementalmente a medida que se define el patrón, destacando la primera coincidencia desde donde se halle el cursor.

## Colores

### [{% ihighlight shell %}syntax enable{% endihighlight %}][syntax]

Activa el [resaltado (o colerado) de sintaxis][wikisyntax]. Puedes hacerte una idea de los lenguajes que soporta vim mirando el contenido de la carpeta {% ihighlight shell %}$VIMRUNTIME/syntax{% endihighlight %}.

También se puede usar el valor on pero esto anularía configuraciones personalizadas mientras que enable las mantendría.

Las combinaciones de colores se pueden cambiar usando la propiedad [{% ihighlight shell %}colorscheme{% endihighlight %}][colorscheme]. Para ver los esquemas que _vim_ ofrece por defecto visita la ruta {% ihighlight shell %}$VIMRUNTIME/colors{% endihighlight %}. También puedes descargarlos o crear los tuyos propios, ajustando el valor de la propiedad al nombre del archivo en cuestión.

## Tipos de archivo

### [{% ihighlight shell %}filetype on{% endihighlight %}][filetype]

En esta propiedad incluye ajustes específicos basados por el tipo de archivo. Es decir, si estás editando un archivo en C, _vim_ cargará automáticamente ajustes particulares para ese tipo de archivo como nuevos ajustes, resaltado de sintaxis, sangrías y tabulaciones, etc… También sobrescribirá cualquier ajuste definido de manera global, puesto que los ajustes locales tienen preferencia sobre los globales.

Si solo pretendes activar la opción de sangría y tabulación, obviando el resto de ajustes concretos, deberás usar el siguiente comando: [{% ihighlight shell %}filetype indent on{% endihighlight %}][filetypeindenton]. También puedes ajustarlo al contrario: [{% ihighlight shell %}filetype plugin on{% endihighlight %}][filetypepluginon].

## Bola extra
### [{% ihighlight shell %}set exrc{% endihighlight %}][exrc]

## Conclusión

<script src="https://gist.github.com/emoriarty/0241dc249fb5605f32ee66345165edfd.js"></script>

## Fuentes
* https://dockyard.com/blog/categories/vim
* http://learnvimscriptthehardway.stevelosh.com
* https://mislav.net/2011/12/vim-revisited/
* http://yannesposito.com/Scratch/en/blog/Learn-Vim-Progressively/#
* http://yannesposito.com/Scratch/en/blog/Vim-as-IDE/
* https://dougblack.io/words/a-good-vimrc.html
* http://items.sjbach.com/319/configuring-vim-right
* https://github.com/amix/vimrc/blob/master/vimrcs/basic.vim
* https://gist.github.com/simonista/8703722
* https://yanpritzker.com/the-cleanest-vimrc-youll-ever-see-20f6158f1f1f

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
[ruler]: http://vimdoc.sourceforge.net/htmldoc/options.html#'ruler'
[relativenumber]: http://vimdoc.sourceforge.net/htmldoc/options.html#'relativenumber'
[numberwidth]: http://vimdoc.sourceforge.net/htmldoc/options.html#'numberwidth'
[cursorline]: http://vimdoc.sourceforge.net/htmldoc/options.html#'cursorline'
[nowrap]: http://vimdoc.sourceforge.net/htmldoc/options.html#'nowrap'
[lazyredraw]: http://vimdoc.sourceforge.net/htmldoc/options.html#'lazyredraw'
[rulerformat]: http://vimdoc.sourceforge.net/htmldoc/options.html#'rulerformat'
[number]: http://vimdoc.sourceforge.net/htmldoc/options.html#'number'
[redraw]: http://vimdoc.sourceforge.net/htmldoc/various.html#:redraw
[scrolloff]: http://vimdoc.sourceforge.net/htmldoc/options.html#'scrolloff'
[sidescrolloff]: http://vimdoc.sourceforge.net/htmldoc/options.html#'sidescrolloff'
[sidescroll]: http://vimdoc.sourceforge.net/htmldoc/options.html#'sidescroll'
[expandtab]: http://vimdoc.sourceforge.net/htmldoc/options.html#'expandtab'
[tabstop]: http://vimdoc.sourceforge.net/htmldoc/options.html#'tabstop'
[shiftwidth]: http://vimdoc.sourceforge.net/htmldoc/options.html#'shiftwidth'
[smarttab]: http://vimdoc.sourceforge.net/htmldoc/options.html#'smarttab'
[autoindent]: http://vimdoc.sourceforge.net/htmldoc/options.html#'autoindent'
[smartindent]: http://vimdoc.sourceforge.net/htmldoc/options.html#'smartindent'
[softtabstop]: http://vimdoc.sourceforge.net/htmldoc/options.html#'softtabstop' 
[ftpluginon]: http://vimdoc.sourceforge.net/htmldoc/filetype.html#:filetype-plugin-on
[ftindenton]: http://vimdoc.sourceforge.net/htmldoc/filetype.html#:filetype-indent-on
[wildmenu]: http://vimdoc.sourceforge.net/htmldoc/options.html#'wildmenu' 
[wildmode]: http://vimdoc.sourceforge.net/htmldoc/options.html#'wildmode'
[wildcharm]: http://vimdoc.sourceforge.net/htmldoc/options.html#'wildcharm'
[wildchar]: http://vimdoc.sourceforge.net/htmldoc/options.html#'wildchar'
[emenu]: http://vimdoc.sourceforge.net/htmldoc/gui.html#:emenu
[ignorecase]: http://vimdoc.sourceforge.net/htmldoc/options.html#'ignorecase'
[smartcase]: http://vimdoc.sourceforge.net/htmldoc/options.html#'smartcase'
[hlsearch]: http://vimdoc.sourceforge.net/htmldoc/options.html#'hlsearch'
[incsearch]: http://vimdoc.sourceforge.net/htmldoc/options.html#'incsearch'
[syntax]: http://vimdoc.sourceforge.net/htmldoc/options.html#'syntax'
[colorscheme]: http://vimdoc.sourceforge.net/htmldoc/syntax.html#:colorscheme
[foldmethod]: http://vimdoc.sourceforge.net/htmldoc/options.html#'foldmethod'
[foldnestmax]: http://vimdoc.sourceforge.net/htmldoc/options.html#'foldnestmax'   
[nofoldenable]: http://vimdoc.sourceforge.net/htmldoc/options.html#'nofoldenable'
[slow-terminal]: http://vimdoc.sourceforge.net/htmldoc/term.html#slow-terminal
[scrolling]: http://vimdoc.sourceforge.net/htmldoc/scroll.html#scrolling
[tabstop]: http://vimdoc.sourceforge.net/htmldoc/options.html#'tabstop'
[softtabstop]: http://vimdoc.sourceforge.net/htmldoc/options.html#'softtabstop'
[shiftwidth]: http://vimdoc.sourceforge.net/htmldoc/options.html#'shiftwidth'
[insexpandtab]: http://vimdoc.sourceforge.net/htmldoc/insert.html#ins-expandtab 
[filetype]: http://vimdoc.sourceforge.net/htmldoc/filetype.html
[filetypeindenton]: http://vimdoc.sourceforge.net/htmldoc/filetype.html#:filetype-indent-on
[filetypepluginon]: http://vimdoc.sourceforge.net/htmldoc/filetype.html#:filetype-plugin-on
[wikisyntax]: https://www.wikiwand.com/es/Coloreado_de_sintaxis