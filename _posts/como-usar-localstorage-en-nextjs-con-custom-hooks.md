---
title: 'Cómo usar localStorage en NextJS con custom hooks'
excerpt: 'En NextJS, el almacenamiento local es una herramienta útil para almacenar datos en el navegador del usuario de manera persistente.'
coverImage: '/posts/1.jpg'
date: '2023-04-22T12:35:07.322Z'
author:
  name: Yerson
  picture: 'https://miro.medium.com/fit/c/176/176/1*R_zu8OlVoQqAURR9tnUl8A.png'
ogImage:
  url: ''
---

En NextJS, el almacenamiento local es una herramienta útil para almacenar datos en el navegador del usuario de manera persistente. Una forma eficaz de acceder al almacenamiento local en NextJS es a través de los custom hooks.

## ¿Qué son los custom hooks?
Los custom hooks son una forma de crear funciones personalizadas en React que pueden ser reutilizadas en diferentes componentes. Los hooks son una característica clave de React que nos permite compartir lógica entre componentes de manera efectiva.

## ¿Cómo podemos utilizar el almacenamiento local en NextJS con custom hooks?
Podemos crear un hook personalizado para acceder al almacenamiento local de la siguiente manera:

```js
import { useState } from "react";

const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.log(error);
    }
  };

  return [storedValue, setValue];
};

export default useLocalStorage;
```

Este hook personalizado nos permite acceder al almacenamiento local en NextJS y almacenar valores en él. Podemos usar este hook en cualquier componente de NextJS para almacenar y recuperar datos.

## Ejemplo de uso
Veamos un ejemplo de cómo podemos utilizar este hook personalizado en un componente de NextJS:

```js
import useLocalStorage from "../hooks/useLocalStorage";

const Counter = () => {
  const [count, setCount] = useLocalStorage("count", 0);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
};

export default Counter;
```

En este ejemplo, hemos creado un contador que utiliza el hook personalizado useLocalStorage para almacenar y recuperar el valor del contador en el almacenamiento local del navegador. Cada vez que el usuario actualiza la página, el valor del contador se mantiene guardado en el almacenamiento local y se recupera automáticamente cuando la página se carga nuevamente.
