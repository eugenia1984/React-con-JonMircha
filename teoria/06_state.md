# <img width="30" height="30" src="https://img.icons8.com/office/30/react.png" alt="react"/> 6 - Estado (state)

- El conjunto de variables que intervienen en la modificacion de un Componente y como se encuentra en un momento dado.

- El **state** son los **valores internos** (variables) que manejan la lógica y los datos de un componente, permite que éste **reaccione a cualquier cambio** lo que hará que **se vuelva a renderizar en la interfaz (UI)**.

El estado tiene 3 características importantes:

- Es **inmutable**, si se modifica se genera una copia, se le agrega lo que cambio y se genera un nuevo estado.

- No se puede modificar directamente, por eso utilizamos **setState**.

- Es **asíncrono**.

El estado de un componente no es accesible desde otro componente excepto de aquel que lo posee y lo asigna.

La propagación del estado fluye de forma **unidireccional** y **descendiente (hacia abajo)**, esto significa que **un componente padre puede pasar valores de su estado a componentes hijos que lo recibirán como propiedades**. -> `El flujo corre en una sola dirección, desde el elemento padre a los hijos.`

En el momento que los valores del estado del padre sufran cambios esto causará que tanto el padre como los hijos que recibieron esos valores como propiedades se rendericen nuevamente y reaccionen a dicho cambio.

Cada componente que se defina como una clase cuenta con un objeto para almacenar información llamado **state**.

**Cada vez que cambia el state React vuelve a renderizar (pintar) el componente en la vista**.

```JavaScript
class Welcome extends Component {
  constructor() {
    super();

    this.state = {
      title: "Hola Mundo",
    };
  }

  render() {
    return <h1>{this.state.title}</h1>;
  }
}
```

En este ejemplo estamos definiendo una componente `<Welcome />` que inicializa el estado con una llave title. En el método render estamos obteniendo el valor de esa llave con `this.state.title`.

Para cambiar el estado utiliza el método `setState`:

```JavaScript
this.setState({
  title: "Hello World",
});
```

- Hay un **ciclo de vida** del componente, que es:

- **Montado** (**Mounting**), la aplicación React carga en el navegador y se carga el componente.

- **Actualización**

- **Desmontaje**

---

## <img width="64" height="64" src="https://img.icons8.com/external-flatart-icons-flat-flatarticons/64/external-note-pad-user-interface-flatart-icons-flat-flatarticons.png" alt="note pad"/> MIS NOTAS

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
