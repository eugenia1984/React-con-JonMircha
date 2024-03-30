# <img width="30" height="30" src="https://img.icons8.com/office/30/react.png" alt="react"/> Mis anotaciones



## <img width="30" height="30" src="https://img.icons8.com/office/30/react.png" alt="react"/> Tips

- En **Google Chrome** me bajo la extension **React developer Tools** y al inspeccionar en el navegador , en el menu de la caja de consula de desarrollo, veo **Components** y **Profiler**.

- Si trabajas con VSC es recomendable instalar la extension **Simple React Snippets**, para tener estos atajos:

| Snippet | Renders                                       |
| ------- | --------------------------------------------- |
| imr     | Import React                                  |
| imrc    | Import React / Component                      |
| imrd    | Import ReactDOM                               |
| imrs    | Import React / useState                       |
| imrse   | Import React / useState useEffect             |
| impt    | Import PropTypes                              |
| impc    | Import React / PureComponent                  |
| cc      | Class Component                               |
| ccc     | Class Component With Constructor              |
| cpc     | Class Pure Component                          |
| ffc     | Function Component                            |
| sfc     | Stateless Function Component (Arrow function) |
| cdm     | componentDidMount                             |
| uef     | useEffect Hook                                |
| cwm     | componentWillMount                            |
| cwrp    | componentWillReceiveProps                     |
| gds     | getDerivedStateFromProps                      |
| scu     | shouldComponentUpdate                         |
| cwu     | componentWillUpdate                           |
| cdu     | componentDidUpdate                            |
| cwun    | componentWillUnmount                          |
| cdc     | componentDidCatch                             |
| gsbu    | getSnapshotBeforeUpdate                       |
| ss      | setState                                      |
| ssf     | Functional setState                           |
| usf     | Declare a new state variable using State Hook |
| ren     | render                                        |
| rprop   | Render Prop                                   |
| hoc     | Higher Order Component                        |
| cp      | Context Provider                              |
| cpf     | Class Property Function                       |


---

Desde la versión 17 de React ya no es necesario importar React, con create-ract-app; pero... se puede ver como una mala practica, ya que en versiones anteriores a la 17 te estaría amrcando un error.

Entonces es mejor en **App.js** agregar:

```JavaScript
import React from "React"
```


---

## <img width="30" height="30" src="https://img.icons8.com/office/30/react.png" alt="react"/> STATE

El conjunto de variables que intervienen en la modificacion de un Componente y como se encuentra en un momento dado.

Es estado es...

... inmutable

.. no lo podemos modificar directamente

... es asíncrono

React tiene el método **setState** para modificarlo.

El flujo corre en una sola dirección, desde el elemento padre a los hijos.

Desde antes de los hook solo un componente basado en clase podia tener estado y con **.setState** como el estado es un objeto se lo modifico.

Gracias a los hook los componentes basados en funciones tambien tienen estado

Creamos el archivo **Estado.js**:

Tengo el componente **Estado** basado en clase.

El estado lo defino en el constructor, va a ser el contador que inicializo en 0, y lo voy a utilizar con **this.state.contador** para renderizar en la etiqueta `<p>`. Y utilizo el **setInterval** para ir actualizando el Estado, lo voy a ir sumando de uno en uno en cada segundo, asi se ve el virtual DOM que se va renderizando cada vez que se modifica el estado.

```JavaScript
import React, { Component } from "react";

export default class Estado extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
    };

    setInterval(() => {
      this.setState({
        contador: this.state.contador +1
      });
    }, 1000);
  }
  render() {
    return(
      <div>
          <h2>El Estado</h2>
          <p>{this.state.contador}</p>
      </div>
    )
  }
}
```

-> El estado de un componente padre puede ser pasado como propiedad a un componente hijo

Para no tener que crear otro archivo y quede todo el tema junto, creo le componente **EstadoAHijo**:

```JavaScript
function EstadoAHijo(props) {
  return(
    <div>
      <h3>{props.contadorHijo}</h3>
    </div>
  )
}
```

Y en el return del componente padre **Estado**:

```JavaScript
return(
      <div>
          <h2>El Estado</h2>
          <p>{this.state.contador}</p>
          <EstadoAHijo contadorHijo={this.state.contador}/>
      </div>
    )
```

-> cada vez que este componente **EstadoAHijo** recibe la propiedad del componente padre **Estado** y la propiedad **contador** que se va actualizando, genera el renderizado (el pintado de la UI por **cambio de propiedad**).

---

---

## <img width="30" height="30" src="https://img.icons8.com/office/30/react.png" alt="react"/> CONDITIONAL RENDERING

Es el renderizado de los componentes, cuando el estado de uun Componente cambia y obliga a que se vuelva a renderizar (repintar) la interface (UI).

Voy a crear el componente **RenderizadoCondicional.js**

Por ejemplo, tenemos un boton y dependiendo si estamos logueados o no, nos sale con le mensaje de login o logout.

Idealmente los componentes **Login** y **Logout** van a estar en su archivo independiente, pero ahora para tener todo lo relativo a renderizado condicional junto los tengo en el mismo archivo.

```JSX
import React, { Component } from "react";

function Login() {
  return(
    <div>
      <h3>Login</h3>
    </div>
  );
}

function Logout() {
  return(
    <div>
      <h3>Logout</h3>
    </div>
  );
}

export default class RenderizadoCondicional extends Component {
  render() {
    return(
      <div>
        <h2>Renderizado Condicional</h2>
        <Login />
        <Logout />
      </div>
    );
  }
}
```

Ahora le creo una variable de estado al componente de clase y en base a esa variable muestro un componente u otro, entonces ejecuto el constructor

```JSX
export default class RenderizadoCondicional extends Component {
  constructor(props) {
    super(props);
    this.state = {
      session: true,
    };
  }
  render() {
    return(
      <div>
        <h2>Renderizado Condicional</h2>
        {this.state.session ? <Login /> : <Logout />}
      </div>
    );
  }
}
```

---

---

## <img width="30" height="30" src="https://img.icons8.com/office/30/react.png" alt="react"/> Renderizado de elementos

Podes renderizar un **array**.

Es importante que cada uno tenga su **key**, va a ser su id unico que lo identifique para tener la referencia exacta en el virtual DOm y poder actualizar el elemento en el DOM real.

Creo el componente **RenderizadoElementos.js**

```JSX
import React, { Component } from "react";

export default class RenderizadoElementos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seasons: ["Primavera", "Verano", "Otoño", "Invierno"]
    }
  }
  render() {
    return(
      <div>
        <h2>Renderizado de elementos</h2>
        <h3>Estaciones del año</h3>
        <ol>
          {
            this.state.seasons.map((el) => <li key={el}>{el}</li>)
          }
        </ol>
      </div>
    );
  }
}
```

Cuando necesitamso pintar elementos de manera dinamica **cada elemento de la lista debe de tener una llave unica**.

El atributo **key** lo utiliza React en su sintaxis JSX para asignarle un id y le sea más rápida la busqueda en su virtual DOM del elemento que si sufre un cambio tendra que volver a renderizar. Por eso en la etqieute `<li>` tengo **key={el}**, esta key es un atributo que no existe para el DOM:

```JSX
<ol>
  {this.state.seasons.map((el) => (
    <li key={el}>{el}</li>
  ))}
</ol>
```

Otro modo es darle como key el **index** para que la key sea el elemento dle arreglo:

```JSX
<ol>
  {this.state.seasons.map((el, index) => (
    <li key={index}>{el}</li>
  ))}
</ol>
```

Otro modo mas complejo seria llamar a una librería que genere id unicos.

Voy a simular la conexión a una API, con un archivo JSON, para ello creo la carpeta **helpers** dentro de **src** y guardare el archivo **data.json** para tener mi archivo json.

```JSON
{
  "frameworks": [
    {
      "id": 1,
      "name": "React",
      "web": "https://reactjs.org"
    },
    {
      "id": 2,
      "name": "Angular",
      "web": "https://angular.io"
    },
    {
      "id": 3,
      "name": "Vue",
      "web": "https://vuejs.org"
    },
    {
      "id": 4,
      "name": "Polymer",
      "web": "https://polymer-library.polymer-project.org/"
    },
    {
      "id": 5,
      "name": "Svelte",
      "web": "https://svelte.dev"
    }
  ]
}
```

Lo importo `import data from "../helpers/data.json";` el RenderizadoElementos.js y me creo un componente que se llama **ElementoLista**:

Asi utilizo del JSOn la url(web) y el nombre(name) del Framework.

```JSX
function ElementoLista(props) {
  return(
    <li>
      <a href={props.el.web} target="_blank">{props.el.name}</a>
    </li>
  )
}
```

Y dentro del **return** del elemento **RenderizandoElementos**, renderizo una lista desordenada con cada uno de los Frameworks, que van a ser los list items que son un anchor (llink).

```JSX
<ul>
  {
    data.frameworks.map((el)=> (
      <ElementoLista key={el.id} el={el}/>
  ))}
</ul>
```

---

---

## <img width="30" height="30" src="https://img.icons8.com/office/30/react.png" alt="react"/> Eventos y Binding

El manejo de los eventos en JSX de React es similar a HTML, solo hay que recordar que se deve envolver entre {} y no se utilizan las comillas.

### <img width="30" height="30" src="https://img.icons8.com/office/30/react.png" alt="react"/> Asignar eventos en componentes de clases

Creo el archivo **Eventos.js** para hacer un contador.

Los eventos en JSX con camelCase.

En JavaScript **this** tiene su contexto, se enlaza con **bind**, tengo que enlazar el this (contexto) de toda la clase para tener acceso al state.

Cada vez que se define un **evento** en un **componente basado en clase** hay que bindear en el **constructor**: **this.sumar = this.sumar.bind(this);**

```JSX
import React, { Component } from "react";

export default class Eventos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contador:0,
    };

    this.sumar = this.sumar.bind(this);
    this.restar = this.restar.bind(this);
  }

  sumar(e) {
    console.log("Sumando");
    console.log(this);
    this.setState({
      contador:this.state.contador + 1,
    });
  }

  restar(e) {
    console.log("Restando");
    console.log(this);
    this.setState({
      contador:this.state.contador - 1,
    });
  }

  render() {
    return(
      <div>
        <h2>Eventos en Componentes de Clase</h2>
        <nav>
          <button onClick={this.sumar}>+</button>
          <button onClick={this.restar}>-</button>
        </nav>
        <h3>{this.state.contador}</h3>
      </div>
    );
  }
}
```

-> Ya con los **hooks** se hacen **componentes funcionales**, desde la versión 16.0.8 de React. Pero esta bueno saber esto por si es un codigo en React de 4 años o más hacia atrás que se maneja con componente de clase (**class components**).

---

---

## <img width="30" height="30" src="https://img.icons8.com/office/30/react.png" alt="react"/>Eventos y Property Initializers

Esta a partir de ES7, generando una variable **state** sin el **this** y utilizando las **arrow functions**.

En el mismo archivo de **Eventos.js** voy a hacerlo

---
---

## <img width="30" height="30" src="https://img.icons8.com/office/30/react.png" alt="react"/>  Estilos en React

Hay muchas formas de aplicar estilos en React.

1. Con **CSS, en un archivo externo**, en el componente nombramos a la clase con **className**, y en un archivo **.css** nombramos a esa clase y le aplicams el estilo. Recordar siempre **importar la hoja de estilos** en el componente de React.

2. Aplicando **estilos en línea**, en este caso tengo que tener las {} porque voy a poner código JavaScript y luego dentro otras {} ya que v a aser un objeto, las key son los atributos de CSS que van en **camelCase** y el value es el valor del atributo, ace es todo como String por loq ue va entre **" "**. Ejemplo en código :

```JSX
<h3 className="bg-react" style={{borderRadius:".75rem", margin:"1rem"}}>Estilos en línea (atributo style)</h3>
```

Si voy a tener bastantes cosas de estilos en línea puedo guardarlo en una variable como un objeto.

```JSX
import React from "react";
import "./Estilos.css";

export default function Estilos() {
  let myStyles = {
    borderRadius: "5rem",
    margin: "2rem auto",
    maxWith: "50%",
  };

  return (
    <section className="estilos">
      <h2>Estilos CSS en React</h2>
      <h3 className="bg-react">Estilos en hojas CSS externa</h3>
      <h3
        className="bg-react"
        style={{ borderRadius: ".75rem", margin: "1rem" }}
      >
        Estilos en línea (atributo style)
      </h3>
      <h3
        className="bg-react"
        style={myStyles}
      >
        Estilos en línea (guardando en variable)
      </h3>
    </section>
  );
}
```

3. Aplicando **normalize** con **@import-normalize;** en una hoja superior, que rije toda la aplicación como un **index.css** o **App.css**.

4. Aplicando **estilos como módulos**. El nombre de la hoja de estilos debe ser : **Nombre.module.css**, por ejemplo ```Estilos.module.css```:

```CSS
.error {
  background-color: #dc3545;
}

.success {
  background-color: #198764;
}
```

Al importarlo le doy un alias: 
```JSX
import moduleStyles from "./Estilos.module.css";
```

Y lo utilizo:

```JSX
<h3 className={moduleStyles.error}>Estilos con módulos</h3>
      <h3 className={moduleStyles.success}>Estilos con módulos</h3>
```

5. Utilizando **SASS**, con la terminal: ```npm install node-sass```.

Y me creo el archivo de extensión **.scss**.

6. Con [**styled-components**](https://styled-components.com/).

Instalación:

```
# with npm
npm install --save styled-components

# with yarn
yarn add styled-components
```

**Single file component**, donde se tiene presentación, contenido y lógica del componente en un mismo archivo.

Tiene mapeado todos los elementos de React que luego se renderiza como **etiqueta HTML**, y con **template strings** le damos estilos.

En VSC es recomendable utilizar la extensión **styled-components-snippets** de **Jon Wheeler** para no ver los estilos como cadenas de texto.


-> Le paso un **color** como **propiedad**:

```JSX
<MyH3 color="#61dafb">
  Hola Soy un h3 estilizado con styled-components
</MyH3>
```

```JSX
const MyH3 = styled.h3`
  color: ${(props) => props.color};`
```

-> También lo puedo desestructurar y al ser JavaScript uedo usar **ternarios**:
```JSX
color: ${({ color }) => color || "#000"};
```

-> Puedo usar las **animaciones** con **keyframe**:

```JSX
import styled, {  keyframes} from "styled-components";

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  
  100% {
    opacity: 1;
    }
`;

  const MyH3 = styled.h3`
  animation: ${fadeIn} 5s ease-out;`
  ```

-> Con **ThemeProvider** puedo usar para el light / dark mode.

```JSX
import styled, {  ThemeProvider } from "styled-components";

const light = {
  color: "#222",
  bgColor: "#DDD",
};

const dark = {
  color: "#DDD",
  bgColor: "#222",
};

const Box = styled.div`
  padding: 1rem;
  margin: 1rem;
  color: ${({ theme }) => theme.color};
  background-color: ${({ theme }) => theme.bgColor};
`;
```

Es como un proveedor, genera un **contexto**, me va a pedir un **objeto**, que pueden ser propiedades que voy a ir definiendo, en este ejemplo los **light** y **dark**.


-> Se puede trabajar **herencia**:

```JSX
const BoxRounded = styled(Box)`
  border-radius: 1rem;
`;
```

-> Aplicar **estilos globales**, se suelen aplicar en **index.css** o en **App.css**.

```JSX
const GlobalStyle = createGlobalStyle`
  h2 {
    padding: 2rem;
    background-color: #fff;
    color: #61dafb;
    text-transform: uppercase;
  }
`;
  ```

### ¿ Y cómo lo estructuramos ?

- Algunos nombran al archivo .css del mismo nombre que el componente y lo guardan en la misma carpeta.

- Dentro de la carpeta tiene un archivo **index.js** con el componente y otro **index.css** con los estilos.

---
