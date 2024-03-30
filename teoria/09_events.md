
# <img width="30" height="30" src="https://img.icons8.com/office/30/react.png" alt="react"/> 9 - Eventos

Manejar eventos en React es muy similar a manejar eventos en el DOM. Sin embargo existen algunas diferencias de sintaxis:

Los eventos de React se nombran usando camelCase, en vez de minúsculas.
Con JSX pasas una función como el manejador del evento, en vez de un string.
Ejemplo, en HTML:

```JavaScript
<button onclick="cambiarIdioma()">Cambiar idioma</button>
```

Ejemplo, en React:

```JavaSCript
<button onClick="{cambiarIdioma}">Cambiar idioma</button>
```

Comeinzan siempre con **on**, se escriben **camelCase** y van sin los (), porque sino se ejecutarían ni bien se carga el componente, en vez de cuando se dispara el evento.

Y a las funciones se las puede llamar **handle** + **lo que maneja**, por eso tenemos, por ejemplo: **handleClick**.

Otra diferencia es que en React no puedes retornar false para prevenir el comportamiento por defecto. Debes, explícitamente, llamar **preventDefault**.

Por ejemplo, en nuestro ejemplo del componente `<Welcome />` visto en el tema del Estado podemos cambiarlo para que cuando hagan click sobre el h1 cambie el texto. Para eso vamos a definir un método **updateText** que vamos a invocar cuando hagan click sobre el h1:

```JavaScript
class Welcome extends Component {
  constructor() {
    super();

    this.state = {
      title: "Hola Mundo",
    };

    // tenemos que enlazar el método al contexto actual
    this.updateText = this.updateText.bind(this);
  }

  updateText() {
    this.setState({
      title: "Hello World",
    });
  }

  render() {
    return <h1 onClick={this.updateText}>{this.state.title}</h1>;
  }
}
```

## <img width="30" height="30" src="https://img.icons8.com/office/30/react.png" alt="react"/> Property initializers

:tv: -> [Documentacion](https://reactjs.org/blog/2015/01/27/react-v0.13.0-beta-1.html#es7-property-initializers)

---

## <img width="30" height="30" src="https://img.icons8.com/office/30/react.png" alt="react"/> Eventos sintéticos

[Documentación de React](https://es.reactjs.org/docs/events.html).

Los atributos de eventos son para las etiquetas JSX, no para los componentes como tal.

Si quiero asignar un evento a un componente tengo que crear una prop (Evento Personalizado).

---

### <img width="64" height="64" src="https://img.icons8.com/external-flatart-icons-flat-flatarticons/64/external-note-pad-user-interface-flatart-icons-flat-flatarticons.png" alt="note pad"/>  MIS ANOTACIONES

#### <img width="30" height="30" src="https://img.icons8.com/office/30/react.png" alt="react"/> Eventos y Binding

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

