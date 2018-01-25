---
title: "vim: ctags"
date: 2018-01-24 16:30:00 +0100
categories: [vim]
excerpt: Como configurar ctags para enlazar referencias entre objetos del lenguaje en vim.
permalink: /articulos/vim-ctags
---
La herramienta [{% ihighlight shell %}ctags{% endihighlight %}][ctags], también llamado _exhuberant ctags_, permite indexar los objetos —definiciones simbólicas— de un lenguaje de programación. Para tal fin genera una lista o tabla en un archivo nuevo generado automáticamente. Estos índices permiten localizar y acceder rápidamente a los archivos dónde fueron definidos los objetos indexados. Vamos, que si pulsas determinada combinación sobre uno de estos objetos, digamos un método de clase, se abrirá automáticamente el archivo que contiene el cuerpo de esa función, situando el cursor sobre la misma línea. Esta opción suele venir integrada en _IDEs_ muchos más completos como pueden ser [IntelliJ IDEA][idea] o [Eclipse][eclipse]. Por otro lado, los editores de texto están mucho menos «cargados» que los anteriores y carecen de esta característica. ctags vendría a rellenar ese vacío, sobre todo en nuestro caso particular: vim.

Básicamente, {% ihighlight shell %}ctags{% endihighlight %} escanea un archivo en busca de esos objetos simbólicos, indexando su origen en un archivo externo nombrado {% ihighlight shell %}tags{% endihighlight %}. También cabe la posibilidad de hacer la exploración de manera recursiva desde el directorio raíz de cualquier proyecto. Debido a las particularidades sintácticas de cada lenguaje soportará una cantidad determinada de tipos de objetos. Entre los objetos más comunes se hallan clases, variables, funciones, constantes, nombres.

Aunque principalmente se ideó para usar en combinación con vim lo cierto es que se puede integrar en cualquier editor, siempre que haya un plugin o addon que lo soporte. Entre los editores que soportan ctags están [Visual Studio Code][addon-vscode], [Sublime][addon-sublime] o [Atom][addon-atom]. También puedes consultar que editores y herramientas soportan ctags en esta [lista][ctags-tool-list], aunque la página parece no haber sido actualizado en los últimos diez años o más.

La página oficial también ofrece un [listado de lenguajes soportados][ctags-languages-list] pero observando la frecuencia de mantenimiento de la misma no es muy de fiar que digamos. Para asegurar un listado más actualizado se puede comprobar mediante la ejecución del siguiente comando.

{% highlight shell %}
ctags --list-languages
{% endhighlight %}

La última versión estable de ctags salió el 9 de julio de 2009. Ha llovido desde entonces. Por lo tanto no sería casualidad que el lenguaje con el que estemos trabajando no esté soportado o simplemente no se haya actualizado. Para solventar este problema ctags ofrece la posibilidad de extender los patrones de reconocimiento. Esto implicaría crear todas la reglas manualmente a través de expresiones regulares ¡Buf que pereza! Recomiendo que antes de ponerte a hacer algo similar es mejor buscar en internet para ver si existe la definición deseada. Normalmente suele haber algún internaute de espíritu altruista que comparta este tipo de trabajos.

Estas opciones, bien sea incluyendo un nuevo lenguaje o extendiendo uno ya existente hasta excluir archivos y directorios, deberán incluirse en un archivo llamado {% ihighlight shell %}.ctags{% endihighlight %} que se debe situar en la carpeta de usuario del sistema. ctags siempre leerá este archivo cada vez que se ejecute.

Por supuesto, para poder ejecutar el comando antes se deberá instalar {% ihighlight shell %}ctags{% endihighlight %}. Como he señalado en anteriores artículos, la mejor herramienta para instalar programas y paquetes para _mac_ es utlizando la herramienta [homebrew][homebrew]. En el caso de linux lo harás con el propio gestor de paquetes instalado por defecto. Y para Windows... la historia de siempre.

Una vez lo tengas instalado, tan solo deberás navegar hasta la carpeta oportuna y ejecutar ctags de manera recursiva. Por supuesto, asegúrate que el proyecto —o una parte del mismo— esté escrito en uno de los lenguajes indicados.

{% highlight shell %}
ctags -R .
{% endhighlight %}

Si lo que pretendes es indexar una carpeta en concreto, entonces cambia el punto por el nombre de la misma. También puedes indexar solamente el tipo de archivo deseado indicando la extensión.

{% highlight shell %}
ctags -R src/*.c
{% endhighlight %}

El resultado es un archivo en texto plano generado automáticamente —con el nombre de {% ihighlight shell %}tags{% endihighlight %}— que utilizará el editor como referencia para poder navegar entre archivos. En el caso de vim, se debe ejecutar el programa en el mismo directorio donde esté situado el archivo {% ihighlight shell %}tags{% endihighlight %}. Para ello es recomendable lanzar el comando {% ihighlight shell %}ctags{% endihighlight %} sobre la carpeta raíz del proyecto.

## Acciones

Supón que el proyecto está escrito en C. Una vez abierto vim, elige un archivo cualquiera y sitúa el cursor sobre una función cualquiera que haya sido importada. El archivo debe hallarse en la misma estructura de directorios del proyecto. Usando la combinación <kbd>Ctrl</kbd><kbd>]</kbd> el programa navegará justo hasta la línea del archivo donde se definió la función. Para regresar teclea <kbd>Ctrl</kbd><kbd>t</kbd>. Así de fácil.

A continuación se muestra una lista de las acciones más comunes usadas en los tags.

**Recuerda que la condición indispensable para estas acciones es que el cursor se halle sobre término en cuestión.**

<table class="commands-table solid-table table-full">
  <thead>
    <tr>
      <td><b>Acción</b></td>
      <td><b>Descripción</b></td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><kbd>Ctrl</kbd><kbd>]</kbd></td>
      <td>Salta hasta la línea del archivo donde se halla el cuerpo del objeto definido. Puedes utilizar un contador para navegar hacia avanzar más de una posición en la pila: <kbd>2</kbd><kbd>Ctrl</kbd><kbd>]</kbd>. Una vez realizada esta acción la pila volverá a modificarse marcando como último lugar el actual, ningún salto más se podrá llevar a cabo. La condición primordial de esta característica es haber viajado hacia atrás en la pila actual.</td>
    </tr>
    <tr>
      <td><kbd>Ctrl</kbd><kbd>t</kbd></td>
      <td>
      Regresa una posición atrás en la pila de saltos realizados por la acción anterior. Puede usarse un número que no exceda la pila de navegación para evitar un regreso secuencial: <kbd>3</kbd><kbd>Ctrl</kbd><kbd>t</kbd>.
      </td>
    </tr>
    <tr>
      <td><kbd>Ctrl</kbd><kbd>w</kbd><kbd>]</kbd></td>
      <td>Al igual que <kbd>Ctrl</kbd><kbd>]</kbd> pero abriendo una nueva ventana.</td>
    </tr>
    <tr>
      <td><kbd>Ctrl</kbd><kbd>w</kbd><kbd>}</kbd></td>
      <td>Abre una ventana de previsualización (no editable) con el contenido del archivo donde apunta el <i>tag</i>.</td>
    </tr>
  </tbody>
</table>

{% gist 7aec99ee11c7f1951e43918c0a94e20b %}

[ctags]: http://ctags.sourceforge.net/
[idea]: https://www.jetbrains.com/idea/
[eclipse]: https://www.eclipse.org/
[addon-vscode]: https://marketplace.visualstudio.com/items?itemName=jaydenlin.ctags-support
[addon-sublime]:https://github.com/SublimeText/CTags 
[addon-atom]: https://atom.io/packages/atom-ctags
[ctags-tool-list]: http://ctags.sourceforge.net/tools.html
[ctags-languages-list]: http://ctags.sourceforge.net/languages.html
[homebrew]: https://brew.sh/