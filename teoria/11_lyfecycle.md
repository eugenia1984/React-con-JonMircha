
# :star: 11 - Ciclo de Vida

Son métodos que se ejecutan automáticamente en un Componente de Clase, ocurren en 3 fases:

- Montaje.

- Actualización.

- Desmontaje

Al inicio estaba en los **componentes de clase**, con los **componentes funcionales** y le **useEffect** podemos replicar ete ciclo de vida.

## Montaje (Mounting)

Estos métodos se ejecutan cuando se crea un componente y se inserta en el arbol del DOM.

- **constructor()**: Se ejecuta al crear la instancia del componente, en el constructor puedes inicializar el estado y enlazar manejadores de eventos.

- **render()**: Es el único método requerido, cuando se ejecuta, examina el estado y las propiedades y dibuja el componente en el árbol del DOM.

- **componentDidMount()**: Se invoca inmediatamente después de que un componente se ha insertado al árbol del DOM. Es útil para ejecutar suscripciones o peticiones asíncronas a API's, bases de datos, servicios, etc.

## Actualización

Estos métodos son ejecutados por cambios en el estado o las propiedades de los componentes.

- **render(**): redibuja el componente cuando detecta cambios en el estado o las propiedades del componente.

- **componentDidUpdate()**: Se ejecuta inmediatamente después de que la actualización del estado o las propiedades sucede, al igual que componenDidUpdate es un método ideal para hacer peticiones externas.

## Desmontaje

Estos métodos son ejecutados una vez que el componente ha sido eliminado del árbol del DOM.

- **componentWillUnmount()**: Se ejecuta antes de destruir el componente del árbol del DOM, es un método útil para hacer tareas de limpieza.

---
