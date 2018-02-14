---
title: "First class function"
date: 2018-01-30 22:00:00 +0100
excerpt: Que significa First-class function y para que sirve.
permalink: /articulos/first-class-function
category: IT
tags: [programacion-funcional, terminologia]
---
_First-class function_ es la cualidad que tiene un lenguaje de programación para poder tratar las funciones como si fueran cualquier otro tipo de objeto, entendiéndose por objeto cualquier valor que puede asignarse a una variable, almacenarse en un _array_, utilizar como argumento e incluso ser el valor devuelto por otra función.

> No he querido traducir el palabro puesto que prácticamente toda terminología relacionada suele estar en inglés y lo contrario podría llevar a confusión. Además que esta es de las fáciles.

El término proviene de otro concepto llamado _[first-class citizen][fcc]_. Que viene a decir que cualquier entidad soporta cualquier tipo de operación común disponible en otras entidades.

Un ejemplo de esto podría ser almacenar en una variable una función. El código mostrado es _Javascript_ pero lo mismo aplica para otros lenguajes que soporten esta característica.

{% highlight javascript %}
const sayHello = () => "Hello"
{% endhighlight %}

En el ejemplo anterior se ha almacenado una función anónima en una variable llamada {% ihighlight javascript %}sayHello{% endihighlight %}.

Si se expone la variable se verá el contenido de la misma. El siguiente resultado es lo que la consola de _Chrome_ devuelve.

{% highlight javascript %}
sayHello
// => () => "Hello"
{% endhighlight %}

Al añadir los dos paréntesis al final de la variable la función contenida es ejecutada, devolviendo la expresión que acompaña a la cláusula _return_ implícita en las _arrow functions_.

{% highlight javascript %}
sayHello()
// => "Hello"
{% endhighlight %}

Y ya que es una variable también podemos utilizarla como argumento en otras funciones.

{% highlight javascript %}
const sayHelloWorld = (fn)  =>  fn() + " World"
const sayHelloElia = (fn) => fn() + " Elia"

sayHelloWorld(sayHello)
// => "Hello World"

sayHelloElia(sayHello)
// => "Hello Elia"
{% endhighlight %}

Obviamente el ejemplo anterior está diseñado solamente para mostrar la transferencia de funciones como argumentos. Lo óptimo hubiese sido que {% ihighlight javascript %}sayHello{% endihighlight %} aceptase un parámetro y concatenase su valor con el cuerpo del resultado.

Otro ejemplo donde también se hace uso de esta característica son los habituales _callbacks_ en _Javascript_. Estos no dejan de ser funciones anónimas (en la mayoría de los casos) que se utilizan como argumentos. Este encadenamiento de funciones puede llevar a crear capas de abstracción innecesarias.

Seguro que alguna vez has hecho algo parecido al siguiente ejemplo (yo también me incluyo).

{% highlight javascript %}
ajax.get("/user/1", function (data) {
  return showData(data)
})
{% endhighlight %}

En la supuesta llamada a un _API_ se describe una función anónima que puede recibir dos argumentos. El primero con los datos esperados y el segundo con el error ¿Qué ocurriría si se produjese uno? Pues que habría modificar todas las llamadas similares para adaptar el código y permitir que pueda recibir un segundo parámetro.

{% highlight javascript %}
ajax.get("/user/1", function (data, error) {
  return showData(data, error)
})
{% endhighlight %}

Como véis es tontería. Hemos añadido una función que contiene a otra función que recibe el mismo número de argumentos. Por lo tanto debemos eliminar este tipo de funciones _proxy_ que solo añaden complejidad al código además de retrasar la evaluación del mismo. El resultado correcto sería el siguiente.

{% highlight javascript %}
ajax.get(‘/user/1’, showData)
{% endhighlight %}

Y así queda mucho más legible, sucinto y elegante.

Otro ejemplo interesante es asignar funciones de distintos objetos en entidades propias de la aplicación.

{% highlight javascript %}
const User = {
  fetch: api.getUser,
  create: api.createUser,
  destroy: api.destroy.User,
  show: view.show
}
{% endhighlight %}

_Et voilà!_ Con esto deberías haberte hecho una idea de que es una _First-class function_.

Entre los lenguajes que lo soportan a parte del mencionado _Javascript_ estarían: _Haskell_, _Python_, _Scala_, _Perl_. En lenguajes imperativos como _C_ y _Java_ esta característica está soportada parcialmente.

Otro asunto que aun no he mencionado y es por el que me he decidido a hacer este artículo (y otros que vendrán), es que la noción de que las funciones puedan ser tratadas como cualquier otro tipo de dato es la base de la programación funcional. Sin este recurso dificilmente podrían darse técnicas como _partial-application/currying_ o _closures_, fundamentales para la composición de funciones. Un ejemplo podría ser el siguiente _snippet_.

{% highlight javascript %}
const sayHello = (name) => ‘Hello ’ + name
const sayWorld = () => ‘World’
const sayElia = () => ‘Elia’

const sayHelloWorld = compose(sayHello, sayWorld)
const sayHelloElia = compose(sayHello, sayElia)

sayHelloWorld()
// => ‘Hello World’
sayHelloElia()
// => ‘Hello Elia’
{% endhighlight %}

{% ihighlight javascript %}compose{% endihighlight %} es un tipo especial de función que puede conseguirse a través de librerías cómo _[ramda][ramda]_ o _[lodash][lodash]_. El propósito de esta función es generar nuevas funciones complejas a partir de otras más sencillas que cumplen un único cometido (principio de responsabilidad única o _SRP_). Pero esto es otro concepto que veremos en un futuro. 

Como puedes apreciar hemos generado dos funciones a partir de otras tres. De no ser por la _First-class function_ (entre otras cosas como _High order function_) este tipo de código no sería posible.

¡Y esto es todo por ahora! Más adelante iré compartiendo otros artículos sobre términología en programación.

## Fuentes
* [en.wikipedia.org/wiki/First-class_function](https://en.wikipedia.org/wiki/First-class_function)
* [stackoverflow.com/questions/10141124/any-difference-between-first-class-function-and-high-order-function](https://stackoverflow.com/questions/10141124/any-difference-between-first-class-function-and-high-order-function)
*[i-programmer.info/programming/theory/5933-what-exactly-is-a-first-class-function-and-why-you-should-care.html](http://www.i-programmer.info/programming/theory/5933-what-exactly-is-a-first-class-function-and-why-you-should-care.html)
* [appendto.com/2016/10/javascript-functions-as-first-class-objects/](https://appendto.com/2016/10/javascript-functions-as-first-class-objects/)
* [drboolean.gitbooks.io/mostly-adequate-guide/content/ch2.html](https://drboolean.gitbooks.io/mostly-adequate-guide/content/ch2.html)

[fcc]: https://en.wikipedia.org/wiki/First-class_citizen
[ramda]: http://ramdajs.com/docs/#compose
[lodash]: https://lodash.com/docs/4.17.4#flowRight 