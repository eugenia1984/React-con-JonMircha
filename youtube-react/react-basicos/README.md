# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


---

# :star: Mis anotaciones

Para crear la app -> ```npx create-react-app react-basicos```

Para correr la app -> ```npm start```

Con **Ctrl + C** detengo lo que estoy ejecutando en la terminal, asi puedo detener el start.

Para hacer el build -> ```npm run build``` y voy a ver el directorio **build** con su carpeta **statics** con las carpetas para los archivos *.css* y *.js* con código ofuscado/minificado y en version ES para que todos los browsers lo interpreten y también trae una carpeta *media* y todos los archivos que estavan en la carpeta **public**.

Cuando ya termines tu app de React y la vayas a subir solo subis lo que se genera ahora en **build**.

Luego de hacer el ```npm run build``` por terminal recomiendan:

```
npm install -g serve
serve -s build
```

Y levanta un servidor como en desarrollo, para ver como va a quedar la app ya desplegada. Va a usar el **puerto 5000**

Para hacer las pruebas -> ```npm run test``` y me va a estar leyendo el archiv **App.test.js**

```
Press `a` to run all tests, or run Jest with `--watchAll`.

Watch Usage
 › Press a to run all tests.
 › Press f to run only failed tests.
 › Press q to quit watch mode.
 › Press p to filter by a filename regex pattern. 
 › Press t to filter by a test name regex pattern.
 › Press Enter to trigger a test run.
```

Elegi la opción **a**

```
 PASS  src/App.test.js
  √ renders learn react link (82 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        2.273 s
Ran all test suites.

Watch Usage: Press w to show more.
```

Para ejectar create react app (pierdo toda la configuracion que ya me trae creat react app y no necesito usar webpack) lo uso cuando necesito agregar alguna funcionalidad extra -> ```npm run eject```. **OJO porque no hay rollback (no hay vuelta atras)**. Si te da **error** es porque al usar *create react app* ya nos queda sincronizado con git, porque lo que si modifique el archivo y no comitee no me va a dejar, commiteo y ejecuto el comando.

---

### Tips

- En **Google Chrome** me bajo la extension **React developer Tools** y al inspeccionar en el navegador , en el menu de la caja de consula de desarrollo, veo **Components** y **Profiler**.

- Si trabajas con VSC es recomendable instalar la extension **Simple React Snippets**, para tener estos atajos:

|Snippet	| Renders |
| ------- | ------- |
| imr	| Import React |
| imrc	| Import React / Component |
| imrd	| Import ReactDOM |
| imrs	| Import React / useState |
| imrse	| Import React / useState useEffect |
| impt	| Import PropTypes |
| impc	| Import React / PureComponent |
| cc	| Class Component |
| ccc	| Class Component With Constructor |
| cpc	| Class Pure Component |
| ffc	| Function Component |
| sfc	| Stateless Function Component (Arrow function) |
| cdm	| componentDidMount |
| uef	| useEffect Hook |
| cwm	| componentWillMount |
| cwrp	| componentWillReceiveProps |
| gds	| getDerivedStateFromProps |
| scu	| shouldComponentUpdate |
| cwu	| componentWillUpdate |
| cdu	| componentDidUpdate |
| cwun	| componentWillUnmount |
| cdc	| componentDidCatch |
| gsbu	| getSnapshotBeforeUpdate |
| ss	| setState |
| ssf	| Functional setState |
| usf	| Declare a new state variable using State Hook |
| ren	| render |
| rprop	| Render Prop |
| hoc	| Higher Order Component |
| cp	| Context Provider |
| cpf	| Class Property Function |

---