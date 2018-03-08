---
title: "Pure Function"
date: 2018-03-1 09:00:00 +0100
excerpt: Las funciones puras permiten construir aplicaciones más robustas gracias a su carácter inmutable. También ofrecen una gran reusabiliad.
permalink: /articulos/pure-function
category: it
tags: [programacion-funcional, diseño, patrones, terminos-informaticos]
---
La programación funcional es un término que en los últimos años ha tomado cierta relevancia en el mundo de la programación. También otros paradigmas como concurrencia fiable o componentización están en boga. Todos estos conceptos tienen su base en una serie de patrones y cualidades del lenguaje que los hacen posibles. Entre estos pautas se encuentran las funciones puras.

Una **función pura** no es más que una función que recibe un valor y devuelve siempre el mismo resultado en base a un cálculo. Hay un tipo de función basada en la [mónada identidad][identity] donde este cálculo es inexistente, retornando el mismo valor de entrada, pero esto es otro tema.

Otro aspecto importante es que la ejecución de una función no tenga ningún tipo de efecto secundario sobre el estado global del programa. Esto evita comportamientos inesperados que podrían derivar en errores de difícil hallazgo.

Aunque antes de profundizar en las características que ofrece este tipo de funciones, valdría la pena saber exactamente de donde proceden. Para ello hay que volver a abrir esos polvorientos apuntes de matemáticas que siempre pensaste que no servirían de nada.

## Origen

Como antes mencioné, el origen de las funciones se encontra en las matemáticas. Principalmente en cálculo analítico y álgebra. La definición general propuesta es la siguiente.

> El concepto general de Función, aplicación o mapeo se refiere a una regla que asigna a cada elemento de un primer conjunto un único elemento de un segundo conjunto <sup><a href="{{ page.permalink | relative_url }}#quote-1">1</a></sup>.

A continucación se muestra otra interpretación diferente.

> Una función es una relación especial entre valores. Cada valor de entrada devuelve el mismo valor de salida.

Según estas dos explicaciones, si una determinada función recibe como valor de entrada 1 y devuelve 2, se espera que cada vez que reciba un valor 1 deberá retornar siempre el mismo valor de salida esperado: 2. Lo mismo ocurrirá con cualquier otro combinación.

Si atendemos a la primera descripción, veremos que una función también se puede llamar aplicación o mapeo. Este último nombre dado ofrece una imagen clara de lo que debería ser una función tanto en matemáticas como en programación. Por mapeo entendemos una relación unívoca entre distintos elementos.

<table class="table-half arrows-table">
<tr>
<td>1 => 2</td>
</tr>
<tr>
<td>2 => 4</td>
</tr>
<tr>
<td>3 => 6</td>
</tr>
<tr>
<td>4 => 8</td>
</tr>
</table>

Como puede observarse en la tabla, cada elemento de la columna izquierda tiene su único equivalente en la columna derecha. Esta relación también se puede expresar mediante la siguiente función matemática.

{% highlight shell %}
f(x) = x·2
{% endhighlight %}

A todos nos sonará la expresión anterior de cuando estudiábamos en el instituto. Pues bien, en programación se definiría de una manera no mucho más diferente.

{% highlight javascript %}
const f = x => x * 2;
{% endhighlight %}

La función de este ejemplo está escrita en Javascript. En lo referente a funciones no importa el lenguaje utilizado, si bien alguna pequeña particularidad pueda haber entre ellos, a todos los efectos aplica el mismo concepto.

Siguiendo con los ejemplos anteriores, en ambos casos si el valor utilizado de la columna izquierda se pasa como argumento a la función, el resultado será el valor adyacente a la derecha. Cualquier otro valor devuelto no cumpliría con la descripción de una función para esa tabla.

Otra de la características de las funciones en matemáticas es su representación cartesiana. El valor de entrada (x) suele corresponder a la horizontal del plano, mientras que el resultado (y) pertenece a su vertical. Una relación como en la tabla anterior genera una línea recta en el gráfico cartesiano (x, y). A esta función se la nombra función lineal.

{% progressive_picture
  thumbnail: /assets/pure-function-1.thumb.jpg 
  src: /assets/pure-function-1.jpg
  height: 1244 
  width: 1238
  alt: 'Función lineal sobre plano cartesiano.'
  class: 'picture-shrink' %}

Aunque en raras ocasiones generamos este tipo de gráficos, la capacidad de interpretar estos valores como componentes que conforman un gráfico permite conceptualizar estos resultados en otros ámbitos. En programación funcional a esta relación entre x e y también se le llama morfismo. Lo cual no es más que otra forma de describir como un conjunto de valores es mapeado a otro conjunto.

Que el origen de las funciones esté en las matemáticas, no significa que uno deba haber obtenido un doctorado para entenderlas. Si es cierto que es recomendable tener un conocimiento mínimo en la materia. En ciertas ocasiones podrías encontrarte con algún problema de solución matemática y no saber resolverlo por no tener el bagaje necesario.

La gran diferencia entre ambas disciplinas estriba en que las funciones en matemáticas sirven exclusivamente a un solo propósito. En programación pueden tener diferentes usos. En la mayoría de las ocasiones se utilizan para realizar procesos completos, que por su naturaleza arbitraria permite la ausencia o presencia múltiple de parámetros. También puede devolver diferentes resultados en base a un mismo argumento. Esta cualidad procedimental de las funciones es la que se pretende evitar mediante programación funcional.

Para ello se acuñó el término función pura, que no es más que el uso específico de la funciones sea el mismo que en matemáticas.

¿Y qué beneficio aporta una función pura ante una convencional? Podrías estar preguntándote. Para responder a esta pregunta, se expone más abajo una serie de características que muestran porqué favorecer el uso este tipo de funciones.

## Cacheable
Puesto que el resultado de una función es siempre el mismo en base a un valor de entrada único, este se puede almacenar en memoria con el parámetro como identificador. Esto se llama en inglés memoization.


## Referencias

<ul>
<li id="quote-1"><a href="https://es.wikipedia.org/wiki/Función_matemática">Extraído del artículo función matemática de la wikipedia.</a></li>
</ul>
[identity]: https://es.wikipedia.org/wiki/M%C3%B3nada_(programaci%C3%B3n_funcional)?oldformat=true#M%C3%B3nada_identidad