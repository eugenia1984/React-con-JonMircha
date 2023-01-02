# :star: App para ir practicando los conceptos de React

## ¿ Qué se puede ver?

- En la primer section se ve la estructura base que se forma al crear un proyecto con **create-react-app**

- El `<Componente />` es **componente de clase** que recibe una **prop** con un mensaje a renderizar.

- El `<ComponenteFuncional /> ` es un **componente funcional** que recibe una **prop** para renderizar un mensaje.

- El `<Propiedades />` es un **componente funcional** que recibe **propiedades**

- El `<Estado />` es un **componente de clase** que es ejemplo de **state**.

- El `<RenderizadoCondicional />` es un **componente de clase** que es ejemplo de **renderizado condicional**, donde vemos mediante un **State** si está logeado renderiza **logout** y si no está logeado renderiza **login**:

```JSX
{this.state.session ? <Login /> : <Logout />}
```

- El `<RenderizadoElementos />` es un **componente de clase** que es ejemplo de **renderizado de elementos**, con un array de datos, utilizo el map para poder renderizar una lista de elementos (cada uno es un componente) los cuales van a tener un **key** único.

- El `<EventosES6 />` es un contador con un botón que suma y un botón que resta, lal hacerles click se treggerea el evento **onClick** e invocará a los métodos sumar() ó restar() que dentro tienen **this.setState** para poder actualizar el **state** interno del componente. Al usar los **componentes de clase** hay que hacer el **bind** en su **constructor**:

```JSX
this.sumar = this.sumar.bind(this);
this.restar = this.restar.bind(this);
```

En los **componentes funcionales** se utilizan los **hooks**.

- El `<EventosES6 />` utiliza **onClick** en vez de usar **bind**, uso **properties initializer**.

- El `<MasSobreEventos />` se ven los **eventos sinteticos** y **eventos personalizados**.

- El `<ComunicacionComponente />` es para ver la comunicación por **props** del componente padre al componente hijo, y la comunicación por **eventos sinteticos** (**variable de estado**) entre los componentes hijos hacia el padre.

- El `<CicloVida />` es un reloj pra ver el **ciclo de vida** de un componente de clase.

- El `<AjaxApis />` con una **petición asíncrona** con **fetch** a **https://pokeapi.co/api/v2/pokemon/** para renderizar Pokemones.

- El `<ContadorHooks />` rehaciendo el contador de clicks, pero utilizando el **hook useState**.

- El `<ScrollHooks />` para ver **hook useEffect**.

- El `<RelojHooks />` nuevamente el reloj (que está en el componente `<CicloVida />`)pero utilizando **useState** y **useEffect**.

- El ```<AjaxHooks />``` nuevamente el pedido de los Pokemones a la API, pero con hooks. El llamado a la **API** puede ser con ...

... **AJAX**

... **fetch**

... **axios**

En este caso vamos a utilizar **fetch** pero combinado con **funciones asíncronas** (con **async - await**, NO hay que volver asincorna la call back del useEffect, es un anti patrón).

---

---

### Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

#### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

#### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

#### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

#### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

#### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

#### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

#### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

---

---
