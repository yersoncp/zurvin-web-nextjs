---
title: '🔥 Mis apuntes de expresiones regulares RegEx en JavaScript'
excerpt: 'Les comparto mis apuntes de expresiones regulares RegEx en JavaScript.'
coverImage: '/posts/aqMR9pQN_.avif'
date: '2023-04-22T05:35:07.322Z'
author:
  name: Yerson
  picture: 'https://miro.medium.com/fit/c/176/176/1*R_zu8OlVoQqAURR9tnUl8A.png'
ogImage:
  url: ''
---

Les comparto mis apuntes de expresiones regulares RegEx en JavaScript. Las expresiones regulares son una herramienta poderosa que nos permite buscar y manipular patrones de texto de manera eficiente. En el contexto de JavaScript, RegEx es una herramienta fundamental para validar y manipular cadenas de texto en aplicaciones web. En este artículo, dejo un resumen de cómo utilizar expresiones regulares en JavaScript para optimizar el manejo de cadenas de texto.

## ¿Qué son las expresiones regulares?
Las expresiones regulares, también conocidas como regex, son patrones de búsqueda utilizados para encontrar y manipular cadenas de texto. Las regex son muy útiles en el procesamiento de texto ya que nos permiten buscar patrones específicos y realizar operaciones como reemplazo o extracción de información.

En JavaScript, las expresiones regulares son un objeto integrado en el lenguaje que nos permite trabajar con patrones de texto de manera eficiente.

## ¿Por qué uso expresiones regulares en JavaScript?
Mis razones por las que uso RegEx en JavaScript:

* `Validación de datos de entrada`: Las expresiones regulares nos permiten validar y asegurar que los datos de entrada cumplan con un formato específico. Por ejemplo, podemos utilizar RegEx para asegurarnos de que un campo de correo electrónico contenga un formato válido.

* `Manipulación de cadenas de texto`: Las expresiones regulares nos permiten manipular y transformar cadenas de texto de manera eficiente. Por ejemplo, podemos utilizar RegEx para reemplazar una palabra específica en un texto con otra palabra.

* `Búsqueda de patrones específicos`: Las expresiones regulares nos permiten buscar patrones específicos en un texto. Por ejemplo, podemos utilizar RegEx para buscar todas las palabras que empiezan con una letra específica.

##  Métodos:
Los 2 métodos comunes que uso para comprobar una expresión regular:

```js
myRegex.test(str)   // Retorna un boolean: true o false
str.match(myRegex)  // Retorna un array con las coincidencias ['ab', 'ac']
```

Adicional puedes usar `replace()` para reemplazar coincidencias de un `RegEx` en un `string`.

```js
myRegex.replace(str)
```

## Mis apuntes RegEx:
* `/Waldo/` = Busca la palabra tal como está escrito
* `/cat|dog/` = Busca una palabra u otra
* `/freeCode/i` = Ignora mayúsculas o minúsculas
* `/Twinkle/g` = Busca más de 1 coincidencia
* `/.un/` = El punto significa cualquier caracter
* `/b[aeiou]g/g` = Toma cualquier caracter del corchete
* `/[a-z]/g` = Toma un rango de caracteres del alfabeto
* `/[a-z0-9]/g` = Toma un rango de caracteres del alfabeto y un rango de números
* `/[^a-z]/g` = Que no sea una letra del alfabeto
* `/^Cal/` = Que comience con Cal
* `/Cal$/` = Que termine en Cal
* `/s+/g` = Busca uno o mas letras 's'
* `/s*/` = Buscar zero o mas letras 's'
* `[A-Za-z0-9_]` = \w
* `[^A-Za-z0-9_]` = \W
* `[0-9]` = \d
* `[^0-9]` = \D
* `\s` = Espacio en blanco
* `\S` = No espacios en blanco
* `{2}` = 2 caracteres
* `{2,}` = 2 o mas caracteres

## Recursos:
Herramientas online para comprobar expresiones reguales en línea:

* [regex101.com](https://regex101.com/)

## Conclusión

Las expresiones regulares son una herramienta poderosa en el desarrollo frontend. Espero que estos apuntes de RegEx en JavaScript te hayan sido útiles y te permitan mejorar la funcionalidad de tus aplicaciones frontend.
