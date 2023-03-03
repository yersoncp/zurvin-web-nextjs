---
title: '🔥 JavaScript: Un refactor a un problema de Array'
excerpt: 'Refactorizando nuestra solución para ver distintas formas de resolver un problema básico de algoritmos usando JavaScript.'
coverImage: ''
date: '2021-11-13T05:35:07.322Z'
author:
  name: Yerson
  picture: 'https://miro.medium.com/fit/c/176/176/1*R_zu8OlVoQqAURR9tnUl8A.png'
ogImage:
  url: ''
---

Encontré un ejercicio en la ruta de entrenamiento de JavaScript de freecodecamp. Aquí les dejo el enlace: [freecodecamp.org/learn/javascript-algorithm...](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/return-largest-numbers-in-arrays)

Básicamente pide que a partir de un array formado por otros array se genere un array resultante en base al número mayor de cada array. De la siguiente forma:


```js
// El problema
[
  [4, 5, 1, 3],  // Extraer el mayor 5
  [13, 27, 18, 26],  // Extraer el mayor 27
  [32, 35, 37, 39],  // Extraer el mayor 39
  [1000, 1001, 857, 1]  // Extraer el mayor 1001
]
```

```js
// El resultado
[5, 27, 39, 1001] // Array formado por los números mayores
```

Existen varios caminos para resolver el problema, sin embargo mi propósito es explicar cómo a partir de una solución inicial se puede llegar a optimizar el código.

## Solución 1:

Vemos que es un array de array, la idea inicial es hacer una primera iteración para recorrer el array general y luego realizar una segunda iteración para el array interior. Esto es algo que no haría pero ¿es legible leer el código?.

```js
function largestOfFour(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let mayor = arr[i][0] // Toma el primer valor de array
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] > mayor) { // Compara si existe un número mayor que el primero
        mayor = arr[i][j];
      }
    }
    result.push(mayor);
  }
  return result;
}
```

## Solución 2: El refactor

Para obtener el número mayor o menor existe una función matemática en JavaScript.
`Math.max` o `Math.min` nos permite obtener el número máximo o mínimo respectivamente. Veamos como queda:

```js
function largestOfFour(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let mayor = Math.max(...arr[i]) // Buscamos el valor max en el array
    result.push(mayor);
  }
  return result;
}
```

¿Qué tal? ¿mejor, verdad?. Logramos quitar la iteración interna y el código es mas legible. Personalmente usar un `for of` me resulta más limpio y evita calcular `arr.length` en la iteración. Reemplazamos `for` por `for of` y quitamos la variable `mayor` ya no es útil.

```js
function largestOfFour(arr) {
  let result = [];
  for (let item of arr) {
    result.push(Math.max(...item));
  }
  return result;
}
```

## Solución 3: El refactor del refactor

Ok, vamos un paso más. Resulta que en lugar de usar `for` o `for of` podemos usar `map` para ir recorriendo los elementos. Con ello evitamos usar la variable `result` que lo único que hace es almacenar la respuesta. Por defecto `map` retorna un array de elementos luego de transformar los elementos de la iteración.

```js
function largestOfFour(arr) {
  return arr.map(item => Math.max(...item));
}
```
