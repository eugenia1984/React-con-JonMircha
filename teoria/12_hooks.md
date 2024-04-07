
# <img width="30" height="30" src="https://img.icons8.com/office/30/react.png" alt="react"/> 12 - Hooks

Los Hooks son una nueva incorporación a partir de **React 16.8.0**, que nos permiten **enganchar** el estado y el ciclo de vida en componentes basados en funciones.

---

## <img width="30" height="30" src="https://img.icons8.com/office/30/react.png" alt="react"/> ¿Por qué se crearon los Hooks?

**Las clases confunden a las personas y a las máquinas**.

Entender la estructura y reglas que implican crear una clase puede ser una curva de aprendizaje lenta y requerir de ciertos conceptos, como el manejo de this en JavaScript, por el contrario las funciones son muy fáciles de entender y manipular incluso para personas que van comenzando.

A las máquinas tampoco les gusta las clases ya que no minifican tan bien como las funciones, esto significa que nuestro código ocupará más texto y por ende más espacio de almacenamiento.

---

## <img width="30" height="30" src="https://img.icons8.com/office/30/react.png" alt="react"/> Preguntas frecuentes

- ¿Los hooks hacen que mi aplicación sea más rápida? **NO**.

- ¿Los hooks hacen algo que un Componente de Clase no pueda hacer? **NO**.

- ¿Los Componentes de Clase van a desaparecer? **NO**.

- ¿Mi conocimiento del estado, las propiedades y los eventos serán obsoleto ahora con hooks? **NO**.

- ¿Debo reescribir todas mis aplicaciones React, ahora con hooks? **Probablemente NO**.

- ¿Debo implementar hooks en mi próximo proyecto? **Probablemente SÍ**.

---

## <img width="30" height="30" src="https://img.icons8.com/office/30/react.png" alt="react"/> Tipos de Hooks

- Básicos (en el 100% de tus proyectos): **useState** (para manejar el estado en componentes funcionales) y **useEffect** (para simular el ciclo de vida de los componentes de clase).

- Avanzados (tal vez no en todos tus proyectos): **useContext**, **useRef**, **useReducer**, **useCallback** y **useMemo**.

Puedes ver toda la lista de hooks disponibles en la [documentación](https://reactjs.org/docs/hooks-reference.html) de React.

## <img src="https://img.icons8.com/external-justicon-flat-justicon/30/null/external-hook-pirates-justicon-flat-justicon.png"/> useState

- Permite manipular el estado de un componente funcional, se comporta como el objeto state y a la función this.setState de los componentes de clase. 

- Para usarlo, debemos **importarlo desde la librería de React**.

- Ejemplo:

```JavaScript
import React, { useState } from "react";
```

- Ahora, en nuestro componente funcional, vamos a **inicializar el hook**, para ello asignaremos mediante la destructuración de arreglos 2 elementos:

1. El **valor del estado** y

2. Un **método para actualizarlo** (por convensión se llama **set**+ **el nombre que usamos para el valor**)

Adicionalmente le pasaremos como parámetro el **valor inicial** del estado al método **useState**.

```JavaScript
import React, { useState } from "react";

export default function Componente() {
  const [valor, setValor] = useState(0);

  return <span>El valor del componente es {valor}</span>;
}
```

- Para actualizar el estado tenemos que utilizar el método resultante de la destructuración de useState y pasarle el nuevo valor.

```JavaScript
import React, { useState } from "react";

export default function Componente() {
  const [valor, setValor] = useState(0);
  return (
    <div>
      <span>El valor del componente es {valor}</span>
      <button onClick={() => setValor(valor + 1)}>Aumentar valor</button>
    </div>
  );
}
```

- Un detalle del estado en los Hooks, es que no debe ser tratado como un objeto como en los componentes de clases, **si necesitas más de un valor cada uno debe ser almacenado en una variable diferente y usar la destructurción de useState**.

```JavaScript
import React, { useState } from "react";

export default function Componente() {
  const [valor, setValor] = useState(0);
  const [valor2, setValor2] = useState("Hola Mundo");
  const [valor3, setValor3] = useState(true);

  return (
    <div>
      <span>El valor del componente es {valor}</span>
      <button onClick={() => setValor(valor + 1)}>Aumentar valor</button>
    </div>
  );
}
```

---

## <img src="https://img.icons8.com/external-justicon-flat-justicon/30/null/external-hook-pirates-justicon-flat-justicon.png"/> useEffect

Permite hacer uso del **ciclo de vida en un componente funcional**. Usar useEffect equivale a la combinación de los métodos:

- **componentDidMount()** (montaje).

- **componentDidUpdate()** (actualización).

- **componentWillUnmount()** (desmontaje).

useEffect recibe como parámetro **una función que se ejecutará cada vez que nuestro componente se renderice**, ya sea por cambios del estado o las propiedades.

Para usarlo, debemos **importarlo desde la librería de React**:

```JavaScript
import React, { useEffect } from "react";
```

Para añadir un efecto que se ejecutará cada vez que nuestro componente se renderice, se debe pasar como parámetro una **función** al hook useEffect misma que se ejecutará al renderizarse el componente.

```JavaScript
import React, { useEffect } from "react";

export default function Efecto() {
  useEffect(function () {
    console.log("Me he renderizado!!!");
  });

  return <span>Este es un ejemplo del hook useEffect.</span>;
}
```

Con useEffect también podemos suscribirnos y desuscribirnos a eventos, temporizadores, servicios, API's, etc.

Para ello hay que escribir el código de la suscripción en el cuerpo de la función de useEffect y para evitar problemas de rendimiento o aumento indiscriminado de la memoria y recursos de nuestra aplicación **retornar en una función el código que desuscriba o cancele lo que se ejecuto en el cuerpo de la función**.

```JavaScript
import React, { useEffect, useState } from "react";

export default function ScrollYNavegador() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    //Creamos una función para actualizar el estado
    const actualizarScrollY = () => {
      let scrollY = window.pageYOffset;
      console.log(`scrollY: ${scrollY}`);
      setScrollY(scrollY);
    };
    //Actualizamos el scroll al montar el componente
    actualizarScrollY();
    //Nos suscribimos al evento scroll de window
    window.addEventListener("scroll", actualizarScrollY);

    //Devolvemos una función para desuscribir el evento
    return () => {
      window.removeEventListener("scroll", actualizarScrollY);
    };
  });

  return (
    <div>
      <span>ScrollY del Navegador: {scrollY}px</span>
    </div>
  );
}
```

Por defecto los efectos se ejecutan cada vez que se realiza un renderizado, si queremos evitar actualizaciones innecesarias o indiscriminadas podemos pasarle un **segundo parámetro al hook**.

El parámetro debe ser un **array con todos los valores de los que dependerá el efecto** (**dependency array**), de forma que sólo se ejecutará cuando ese valor cambie.

```JavaScript
import React, { useEffect, useState } from "react";

export default function ScrollYNavegador() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    //Creamos una función para actualizar el estado
    const actualizarScrollY = () => {
      let scrollY = window.pageYOffset;
      console.log(`scrollY: ${scrollY}`);
      setScrollY(scrollY);
    };
    //Actualizamos el scroll al montar el componente
    actualizarScrollY();
    //Nos suscribimos al evento scroll de window
    window.addEventListener("scroll", actualizarScrollY);

    //Devolvemos una función para desuscribir el evento
    return () => {
      window.removeEventListener("scroll", actualizarScrollY);
    };
  }, [scrollY]);

  return (
    <div>
      <span>ScrollY del Navegador: {scrollY}px</span>
    </div>
  );
}
```

Si le pasamos un **array vacío**, eso hará que el efecto no dependa de ningún valor, por lo que **sólo se ejecutará al montarse y desmontarse el componente**.

```JavaScript
import React, { useEffect, useState } from "react";

export default function ScrollYNavegador() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    //Creamos una función para actualizar el estado
    const actualizarScrollY = () => {
      let scrollY = window.pageYOffset;
      console.log(`scrollY: ${scrollY}`);
      setScrollY(scrollY);
    };
    //Actualizamos el scroll al montar el componente
    actualizarScrollY();
    //Nos suscribimos al evento scroll de window
    window.addEventListener("scroll", actualizarScrollY);

    //Devolvemos una función para desuscribir el evento
    return () => {
      window.removeEventListener("scroll", actualizarScrollY);
    };
  }, []);

  return (
    <div>
      <span>ScrollY del Navegador: {scrollY}px</span>
    </div>
  );
}
```