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

<table class="table-half">
<tr>
<td>1</td>
<td>2</td>
</tr>
<tr>
<td>2</td>
<td>4</td>
</tr>
<tr>
<td>3</td>
<td>6</td>
</tr>
<tr>
<td>4</td>
<td>8</td>
</tr>
</table>
## Referencias

<ul>
<li id="quote-1"><a href="https://es.wikipedia.org/wiki/Función_matemática">Extraído del artículo función matemática de la wikipedia.</a></li>
</ul>
[identity]: https://es.wikipedia.org/wiki/M%C3%B3nada_(programaci%C3%B3n_funcional)?oldformat=true#M%C3%B3nada_identidad