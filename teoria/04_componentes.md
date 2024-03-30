
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

## <img width="64" height="64" src="https://img.icons8.com/external-flatart-icons-flat-flatarticons/64/external-note-pad-user-interface-flatart-icons-flat-flatarticons.png" alt="note pad"/> MIS ANOTACIONES

### <img width="30" height="30" src="https://img.icons8.com/office/30/react.png" alt="react"/> Creando y agregando un nuevo componente

En la carpeta **src** creo una nueva carpeta llamada **components** y dentro voy a crear un nuevo componente.

Hay distintas formas de nombrar un archivo, create-react-app utiliza la tecnica del **UpperCamelCase**, y pueden ser **.jsx** ó **.js**.

Entonces dentro de la carpeta components creo **Componente.js**.

Primero creo un componente basado en CLASES...

... Si lo desestructuro:

```JSX
import React, {Component} from "react"

class Componente extends Component {
  render() {  // el metodo render es el que le permite renderizar el codigo JSX

  }
}

// export Componente -> es una forma de exportarlo con la desestructuracion
export default Componente;
```

... si no lo desestructuro:

```JSX
import React from "React"

class Componente extends React.Component {}

export default Componente;
```

-> Entonces en **compnente.js** tengo:

```JSX
import React, {Component} from "React"

class Componente extends Component {
  render() {
    return <h2>Hola soy un componente</h2>;
  }
}

export default Componente;
```

Y en **App.js** lo mando a llamar:

```JavaScript
import Componente from './components/Componente';

// Y dentro de function App() { return()}
<section>
  <Componente> </Componente>
</section>
```

Y puedo simplificar la escritura asi:

```JSX
import Componente from './components/Componente';

// Y dentro de function App() { return()}
<section>
  <Component />
</section>
```


A este componente le puedo pasar una **propiedad**, entonces en el**App.js**:

```JSX
import Componente from './components/Componente';

// Y dentro de function App() { return()}
<section>
  <Componente msg="Hola soy un Componente" />
</section>
```

Y en **Componente.js** :

```JSX
import Componente from './components/Componente';

// Y dentro de function App() { return()}
<section>
  <Componente msg="Hola soy un Componente desde una prop" />
</section>
```

Y en **Component.js**:

```JavaScript
import React, { Component } from "react";

class Componente extends Component {
  render() {
    return <h2>{this.props.msg}</h2>;
  }
}

export default Componente;
```

- Pero con la llegada de los **hooks** se usa cada vez menos crear componentes como clases. Ahora tenemos los **componentes funcionales**, por eso me creo el **ComponenteFuncional.js**, en este caso la **props** se pasa como parametro y no se utiliza el **this**:

```JSX
import React, {Component} from "react";

function ComponenteFuncional(props) {
  return <h2> {props.msg}</h2>;
}

export default ComponenteFuncional;
```

Y lo puedo hacer todavía más expresivo si lo declaro en una variable no espresada:

```JSX
import React, {Component} from "react";

const ComponenteFuncional = props => <h2> {props.msg}</h2>;

export default ComponenteFuncional;
```

Y en **App.js**:

```JSX
import ComponenteFuncional from "./components/ComponenteFuncional";
// Y dentro de function App() { return()}, dentro de una <section>
<ComponenteFuncional msg="Hola soy un Componente Funcional desde una prop" />

```