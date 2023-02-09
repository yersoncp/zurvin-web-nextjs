---
title: 'La vida detrás de JavaScript: Number'
excerpt: 'Los bits lo son todo. Van provistos de 1 y 0. Normalmente toman formas de alto y bajo, fuerte y débil o simplemente les da de sí o no. Cualquier cosa puede ser reducido a ceros y unos.'
coverImage: ''
date: '2019-11-22T05:35:07.322Z'
author:
  name: Yerson
  picture: 'https://miro.medium.com/fit/c/176/176/1*R_zu8OlVoQqAURR9tnUl8A.png'
ogImage:
  url: ''
---

Los bits lo son todo. Van provistos de 1 y 0. Normalmente toman formas de alto y bajo, fuerte y débil o simplemente les da de sí o no. Cualquier cosa puede ser reducido a ceros y unos.

Imagina un mar de bits. 30 mil millones de bits. Una computadora típica tiene más de esta cantidad en su almacenamiento volátil.

¿Podrías ser capaz de navegar en este mar de bits sin perderte? Por suerte podemos agruparlos en pedazos. Llamemos valores en JavaScript a estos pedazos. Por supuesto cada valor tiene un precio y usar una cantidad enorme de estos al mismo tiempo te dejaría sin bits. Afortunadamente esto es un problema sólo si lo necesitas todos al mismo tiempo.

Ok. En JavaScript hay tipos de valores: número, cadenas, booleanos, objetos, funciones y valores indefinidos. Todos con singulares características y comportamientos variados.

Hoy vamos a escudriñar la vida de los números:

## Number

Los Number son, como es lógico, números. En Javascript podemos escribir así:

```
18
```

En el interior se inicia un alboroto de ceros y unos para hacer que exista el 18 dentro de la memoria.

```
0     0    0    1    0   0   1   0
128   64   32   16   8   4   2   1
```

Ajá, así que 18 es `00010010` en binario de 8 bits.

JavaScript usa una cantidad fija de bits, 64, para guardar un número. Existe un límite de 2⁶⁴ que es cerca a 18 cuatrillones (18 con 18 ceros). Eso es mucho. La memoria de la computadora solía ser de 8 o 16 bits, hoy representar 64 bits no es un problema.

## ¿Entonces 18 cuatrillones es el número máximo en Javascript?

No. Los bits también guardan negativos, así que un bit indica el signo, y otro bit adicional para guardar la posición del punto decimal cuando sean números no enteros.

El número entero máximo es cerca del rango de 9 trillones (9 con 15 ceros). Cualquier cálculo menor a 9 trillones tienen garantía de precisión. Desafortunadamente se pierde precisión para números que superen esta cantidad.

Algo de código, probemos en la consola:

```
Number.MAX_SAFE_INTEGER
// 9007199254740991
Number.MIN_SAFE_INTEGER
// -9007199254740991
```

Tal como la teoría, el máximo y mínimo con precisión garantizada están en el rango de 9 trillones. Ciertamente el valor exacto es 2⁵³–1.

## ¿Por qué pierde precisión fuera del límite?

Si añadimos +1 y +2 respectivamente y realizamos la igualdad obtenemos true. Matemáticamente esto no es posible.

```
Number.MAX_SAFE_INTEGER + 1 === Number.MAX_SAFE_INTEGER + 2
// true
```

Ahora, probemos lo siguiente:

```
9007199254740991 + 1
// 9007199254740992
9007199254740991 + 2
// 9007199254740992
9007199254740991 + 3
// 9007199254740994
9007199254740991 + 4
// 9007199254740996
```

¿Ves que comienza a perder precisión?. Ocurre que JavaScript usa ‘números de formato de punto flotante de doble precisión’ tal como se especifica en IEEE 754 y sólo puede representar con seguridad números entre –(2⁵³–1) y 2⁵³–1.

## Infinity y NaN

No confies en Infinity. No se comportan como números normales.

Infinity y -Infinity representan infinitos (positivo y negativo). Entonces Infinity -1 sigue siendo infinito, ¿no?. Y Infinity - Infinity es ¿cero?. Esto nos lleva a NaN, son las siglas de “not a number”. Cualquier número que no puede representarse adecuadamente acaba siendo un NaN: 0/0, Infinity - Infinity, etc…

En post futuros veremos a otros seres carentes de sentimiento pero sí llenos de bits, hasta entonces sé feliz.

Libro de referencia: [https://eloquentjavascript.net](https://eloquentjavascript.net)