
# :star: 5 - Propiedades (props)

Son **valores que recibe un componente hijo de su componente padre**. Se agrupan en un objeto llamado **props**, el cual puede recibir diferentes tipos de datos, como:

- Strings

- Numbers

- Booleans

- Arrays

- Objects

- Functions

- React Elements

- React Components

Las props son inmutables, es decir, **son valores de sólo lectura**, no se pueden modificar.

Es como agregarle un atributo a una etiqueta JSX.

El componente las recibe como atributos que se pasan a través de JSX.

Por ejemplo, podemos pasar un atributo name al componente Welcome:

```JSX
<Welcome name="Jon" />
<Welcome name="Irma" />
```

- Si defines el componente en una clase, las props se reciben en el **constructor de la clase**:

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

```JavaSCript
const Welcome = (props) => {
  return <h1>{props.name}</h1>;
};
```

Se puede recibir como parametro a **prop** y luego la llamo como **prop.nombreDeLaProp** y sino la puedo desestructurar al recibirla como parametro **{ nombreDeLaProp }** entonces no es necesario luego la usarla llamar a props. sino directamente escribo el nombre de la prop.

---