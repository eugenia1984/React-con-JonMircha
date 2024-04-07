
# <img width="30" height="30" src="https://img.icons8.com/office/30/react.png" alt="react"/> 5 - Propiedades (props)

Son **valores que recibe un componente hijo de su componente padre**. 

Se agrupan en un objeto llamado **props**(dentro cada atributo de ese objeto es una de las propiedades que le vas a pasar, es como agregarle un atributo a la etiqueta JSX), el cual puede recibir diferentes tipos de datos, como:

```
- Strings
- Numbers
- Booleans
- Arrays
- Objects
- Functions
- React Elements
- React Components
```

- Las props son inmutables, es decir, **son valores de sólo lectura**, no se pueden modificar.

- El componente las recibe como atributos que se pasan a través de JSX.

Por ejemplo, podemos pasar un atributo name al componente Welcome:

```JSX
<Welcome name="Eugenia" />
```

- Si defines el componente en una clase, las props se reciben en el **constructor de la clase**, se inicializan en el constructor y luego se pueden utilizar con `this.name`:

```JavaScript
class Welcome extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <h1>{this.props.name}</h1>;
  }
}
```

- Si defines el componente como una función, las props se reciben como un **parámetro de la función**:

```JSX
const Welcome = (props) => {
  return <h1>{props.name}</h1>;
};
```

Se puede recibir como parametro a **prop** y luego la llamo como **prop.nombreDeLaProp** y sino la puedo desestructurar al recibirla como parametro **{ nombreDeLaProp }** entonces no es necesario luego la usarla llamar a props., sino directamente escribo el nombre de la prop.:

```JSX
const Welcome = ({ name }) => {
  return <h1>{name}</h1>;
};
```

---

### <img width="64" height="64" src="https://img.icons8.com/external-flatart-icons-flat-flatarticons/64/external-note-pad-user-interface-flatart-icons-flat-flatarticons.png" alt="note pad"/> MIS ANOTACIONES 

Dentro de **components** creo **Propiedades.js** para ver este tema.

Me creo una list item con algunos de los tipos de valores que pueden tener las props, como el valor booleano no se renderiza lo hago con un ternario, y paso los valores no primitivos como arrays, object, funcion, elemento de React y React Component.

```JSX
import React from "react";
import PropTypes from "prop-types";

export default function Propiedades(props) {
  return(
    <div>
      <h2>Propiedades: {props.porDefecto}</h2>
      <ul>
        <li>{props.cadena}</li>
        <li>{props.numero}</li>
        <li>{props.booleano?"Verdadero":"Falso"}</li>
        <li>{props.arreglo.join(", ")}</li>
        <li>{props.objeto.nombre + "-" + props.objeto.apellido}</li>
        <li>{props.arreglo.map(props.funcion).join(", ")}</li>
        <li>{props.elementoReact}</li>
        <li>{props.componenteReact}</li>
      </ul>
    </div>
  )
}
// Puedo cargar una propiedad por defecto con .defaultProps
// Desde el mismo componente, no necesita recibirlo dle padre
Propiedades.defaultProps = {
  porDefecto: "Las props",
}
//cuando me importo prop types puedo definir las caracteristicas de las propiedades, ais la propiedad numero solo recibe Number
Propiedades.propTypes = {
  numero:PropTypes.number.isRequired,
};
```

**numero:PropTypes.number.isRequired,** asi establezco que solo acepte Number y que sea requerido (obligatorio).

De este modo puedo definir que valores necesito o si es obligatorio.

-> Hay que acordarse de instalarlo como dependecia.

Y en **App.js**:

```JavaScript
import Propiedades from "./components/Propiedades";
// Y dentro del return en el div padre de los componentes
<Propiedades
    cadena="Esto es una cadena de texto"
    numero={19}
    booleano={true}
    arreglo={[1,2,3]}
    objeto={{nombre:"Euge", apellido:"Costa"}}
    funcion={num => num*num}
    elementoReact={<i>Esto es un elemento React</i>}
    componenteReact={<Componente msg="Soy un componente pasado como prop" />}
  />
```

Antes ya venía integrado a la librería de React, luego lo decidieron sacar como módulo externo, pero al estilo de TS podemos definir que ciertos valores o ciertas props se inicialicen con un valor especial o que sean requeridos, para eso hay que importar el modulo **prop types**

Por terminal lo puedo instalar: ` > npm i -S prop-types` y en el **package.json** en _dependecies_ veo **"prop-types": "^15.8.1",**

---

## Tipado de propiedades con JavaScript

```JSX
import PropTypes from "prop-types";

export const Propiedades = (props) => {
  return (
    <div>
      <h2>Props</h2>
      <p>Prop by default: {props.porDefecto}</p>
      <ul className="ul-none">
        <li>- String: {props.cadena}</li>
        <li>- Number: {props.numero}</li>
        <li>- Boolean: {props.booleano ? "true" : "false"}</li>
        <li>- Array: {props.arreglo.join(", ")}</li>
        <li>
          - Object: nombre: {props.objeto.nombre}, correo: {props.objeto.correo}
        </li>
        <li>- Function: {props.arreglo.map(props.funcion).join(", ")}</li>
      </ul>
      <hr />
    </div>
  );
};

Propiedades.defaultProps = {
  porDefecto: "Las props",
};

Propiedades.propTypes = {
  cadena: PropTypes.string.isRequired,
  numero: PropTypes.number.isRequired,
  booleano: PropTypes.bool,
  arreglo: PropTypes.array,
  objeto: PropTypes.object,
  funcion: PropTypes.func,
  porDefecto: PropTypes.string,
};
```

---