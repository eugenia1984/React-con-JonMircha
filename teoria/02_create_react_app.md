
# :star: 2 - CRA (Create React App)

[https://create-react-app.dev/](https://create-react-app.dev/)

Aunque existen varias formas de empezar con React, una manera sencilla y eficiente es con `create-react-app`, una aplicación de consola que nos va a permitir crear aplicaciones React con cero configuración, lo que nos permitirá centrarnos en los más importante: Programar en React.

Para crear una aplicación utilizamos el comando npx create-react-app seguido del nombre que le quieras dar a tu aplicación. Por ejemplo:

```
npx create-react-app my-app
```

Cuando ejecutas ese comando `create-react-app` va a crear una carpeta llama `my-app` con una serie de archivos y subcarpetas para que puedas empezar a trabajar en tu proyecto.

Ingresa a la carpeta `my-app` y ejecuta el proyecto con los siguientes comandos:

```
cd my-app
npm start
```

El último comando ejecuta el servidor de desarrollo y abre un navegador con una pantalla de bienvenida.

¡Felicidades!, has creado tu primera aplicación con React.

En consola, cuando esta todo ok se ve:

```
Success! Created react-basicos at C:\Users\juan\Desktop\react_jonmircha\youtube-react\react-basicos
Inside that directory, you can run several commands:

  npm start
    Starts the development server.

  npm run build
    Bundles the app into static files for production.

  npm test
    Starts the test runner.

  npm run eject
    Removes this tool and copies build dependencies, configuration files
    and scripts into the app directory. If you do this, you can’t go back!

We suggest that you begin by typing:

  cd react-basicos
  npm start

Happy hacking!
```

---

## ¿Qué incluye create-react-app?

Un proyecto creado con create-react-app, además de React, incluye librerías como:

- **Webpack**: que se encarga de procesar y empaquetar nuestro código JavaScript (con sus dependencias), archivos CSS y otros archivos estáticos como imágenes, vectores, fuentes, etc.

- **Babel**: que nos permite usar nuevas características de ECMAScript.

- **PostCSS** que es una librería para el procesamiento de CSS.

- **Jest** y **Testing Library** que son librerías para testing.

- etc.

Uno podría configurar un proyecto de React manualmente e incluir cada una de estas librerías, pero es bastante engorroso, create-react-app nos hace la vida más fácil.

---

## Estructura de carpeta

`create-react-app` crea la siguiente estructura de archivos y carpetas:

```
my-app/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    App.css
    App.js
    App.test.js
    index.css
    index.js
    logo.svg
```

Los dos archivos más importantes son:

**public/index.html** - la plantilla HTML de la aplicación.

**src/index.js** - el punto de entrada JavaScript de la aplicación.

Puedes eliminar o renombrar otros archivos según tus necesidades.

Dentro de **src** se incluyen todos los archivos JavaScript y CSS de tu aplicación. Es la carpeta donde irá el código de desarrollo. Está el *App.css\*\*, el *App.js\** y el *App.test.js\*.

También es recomendable incluir otros archivos estáticos como imágenes y fuentes en esta carpeta. Puedes crear subcarpetas para organizar mejor los archivos.

En **public** van todos los archivos estáticos que necesites incluir en la plantilla **public/index.html**. Aca van todos los assets: favicon.ico, index.html, manifest.json(para hacerla progresive web app), dos logos en distinto tamaño.

Puedes crear otras carpetas además de **src** y **public**. Estas carpetas no van a ser incluídas en el paquete de distribución.

Está también la carpeta **node_modules** con las dependencias.

Las carpetas **public** y **src** se ejecutan en el modo de desarrollo, lueg en el proceso dle BUILD se va a crear la carpeta **build**

- Si utilizamos Visual Studio Code podemos agregar a extensión **Simple React Snippets** que nos va a agilizar el desarrollo.

### Scripts

En la carpeta del proyecto **package.json** puedes ejecutar los siguientes comandos:

`npm start` - inicia el servidor de desarrollo y abre un navegador con la aplicación.

`npm test` - ejecuta las pruebas.

`npm run build` - empaqueta la aplicación para producción en la carpeta build.

`npm run eject` - permite cambiar manualmente las librerías y configuración que utiliza `create-react-app` por defecto. Ten cuidado con este comando, una vez que se expulsa la configuración inicial no hay vuelta atrás.

En el archivo **package.json** los veo:

```JavaScript
"scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  }
```

---

## Hot reloading

Una de las funcionalidades más importantes de los proyectos creados con create-react-app es la capacidad de hacer cambios en vivo sin necesidad de reiniciar el servidor. Si haces un cambio en algún archivo en src o public el navegador se refresca automáticamente.

---