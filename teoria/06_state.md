
# :star: 6 - Estado (state)

El **state** son los **valores internos** (variables) que manejan la lógica y los datos de un componente, permite que éste **reaccione a cualquier cambio** lo que hará que **se vuelva a renderizar en la interfaz (UI)**.

El estado tiene 3 características importantes:

- Es **inmutable**, si se modifica se genera una copia, se le agrega lo que cambio y se genera un nuevo estado.

- No se puede modificar directamente, por eso utilizamos \*_setState_()\*.

- Es **asíncrono**.

El estado de un componente no es accesible desde otro componente excepto de aquel que lo posee y lo asigna.

La propagación del estado fluye de forma **unidireccional** y **descendiente (hacia abajo)**, esto significa que **un componente padre puede pasar valores de su estado a componentes hijos que lo recibirán como propiedades**.

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