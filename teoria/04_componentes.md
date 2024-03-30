
# <img width="30" height="30" src="https://img.icons8.com/office/30/react.png" alt="react"/> 4 - Componentes

En React se introduce el concepto de componentes para crear la **interfaz gráfica** de nuestra aplicación.

Permiten separar el código y los elementos de la interfaz en pequeñas piezas independientes y reutilizables que estarán aisladas una de otras.

El objetivo es que cada componente sea independiente y encapsule su marcado, estilos y estado. De esa forma los componentes pueden ser reutilizables y la interfaz gráfica más fácil de mantener y evolucionar.

Los componentes pueden tener **estado**.

Se le pueden pasar datos a un componente a través de algo llamado **props** y devuelven a React elementos que describen lo que debe verse en pantalla.

En React los datos fluyen de forma **unidireccional**, **de componentes padres a componentes hijos**.

React te permite definir componentes como **clases** o como **funciones**.

## <img width="30" height="30" src="https://img.icons8.com/office/30/react.png" alt="react"/> Tipos de Componentes

Como una **clase** que extiende de Component con un **método render**:

```JavaScript
import React, { Component } from "react";

class Title extends Component {
  render() {
    return <h1>Hola mundo</h1>;
  }
}
```

O como una **función** que retorna lo que se va a renderizar (con el **return**):

```JavaScript
const Title = () => {
  return <h1>Hola Mundo</h1>;
};
```

Pero al introducir los **hooks** se pueden crear componentes basados en funciones pero que también tienen un **estado**

## <img width="30" height="30" src="https://img.icons8.com/office/30/react.png" alt="react"/> Utilizando componentes

Para utilizar un componente debes importarlo y después incluirlo en tu JSX como se muestra en el siguiente ejemplo:

```JSX
import React from "react";
import Title from "./Title";

function App {
    return <Title />;
}
```

-> **Ya no es necesario hacer import React from "react" desde REact 17 en adelante** -> no es necesario importar la librería, la menos con create react app. Pero... se considera como una mala práctica, ya que las versiones anteriores te marca un error, entonces aunque ahora se puede no iportar es mejor importarlo.

---