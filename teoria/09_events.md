
# :star: 9 - Eventos

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

## Property initializers

:tv: -> [Documentacion](https://reactjs.org/blog/2015/01/27/react-v0.13.0-beta-1.html#es7-property-initializers)

## Eventos sintéticos

[Documentación de React](https://es.reactjs.org/docs/events.html).

Los atributos de eventos son para las etiquetas JSX, no para los componentes como tal.

Si quiero asignar un evento a un componente tengo que crear una prop (Evento Personalizado).

---