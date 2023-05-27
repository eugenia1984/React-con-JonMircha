# :star: Aca pueden ver todos los proyectos realizados en el curso de React con Jon Mircha

## Proyectos

### 01-reat-basicos

Práctica de React, donde se ven los siguientes temas:


- la sintaxis **JSX**.

- los comandos básicos de create-react-app y la estructura inicial del proyecto.

- creación de un **componente** basado en clase y en funciones -en Función declarada y en Función Expresada (arrow function)-.

- **props**(propiedades) y **state**(estado).

- **renderizado condicional** y renderizado de elementos.

- **eventos nativos, sintéticos y personalizados**, bind y property initializer.

- **comunicación entre componentes** y **ciclo de vida**

- **peticiones asíncronas (AJAX y API´s)**, utilizando **fetch** a la API de Pokemones para renderizar algunos.

- **peticiones asíncronas (AJAX y API´s)**, utilizando **fetch** y **hooks** a la API de Pokemones para renderizar algunos.

- **hooks**: **useState**, **useEffect**, **useRef**.

- **custom hooks**

- **formularios**, manejando el estado con React, formularios descontrolados

- aplicando **estilos** en React...

...estilos en línea, con el atributo **style** en forma de objeto de JavaScript

... estilos en una hoja de estilos aparte

... aplicando **normalize**

... CSS con **módulos**

... con [**SASS**](https://sass-lang.com/)

... con [**styled components**](https://styled-components.com/)


### 02-frameworks-css


Donde se ven algunos de los frameworks para trabajar estilos con React.

Como se va a trabajar con varias librerìas, para que no se _pisen_ los estilos, en el **index.html** se van a ir comendantdo los links al CDN para ir visualizando de a una librería.

Tambén dejo comentado en **app.jsx** el componente que está utilizando el Framework comentado. Así solo se isualiza el que está utilizando el CDN del Framework CSS que está activo en index.html.

---


- [<img src="https://img.icons8.com/color/36/null/bootstrap.png"/> **Bootstrap**](https://getbootstrap.com/). Agrego un NavBar de Bootrstrap, haciendo los cambios necesarios porque utilizamos JSX(**Class** pasa a ser **className**, se **Cierran** toas las etiquetas html, etc):

- [<img src="https://bulma.io/images/bulma-logo.png" alt="bulma icon" width="56" height="14"/> **Bulma**](https://bulma.io/). Agrego una card y realizo los cambios necesarios, ya que trabajo con JSX (**class** pasa a **className**, **autocierro** todas las tag `<img />`, **datetime** pasa a **dateTime**, agregar **href** en la tag `<a>`).


- [**React Bootrstrap**](https://react-bootstrap.github.io/). Instalo por npm Bootstrap y React-Bootstrap: `npm install react-bootstrap bootstrap`, también se puede usar instalando con `yarn`. En el **package.json** puedo confirmar que se instaló bien.

```
 "dependencies": {
    "bootstrap": "^5.2.3",
    "react-bootstrap": "^2.7.4"
  },
```


- [**MUI**](https://mui.com/). Se puede instalar por npm: `npm install @mui/material @emotion/react @emotion/styled` o por yarn: `yarn add @mui/material @emotion/react @emotion/styled`. Si le quiero agregar **Styled-components**, con npm: `npm install @mui/material @mui/styled-engine-sc styled-components` o con yarn: `yarn add @mui/material @mui/styled-engine-sc styled-components`. Como utiliza la fuente **Roboto** se puede instalar por **CDN** desde Google Fonts, o por npm: `npm install @fontsource/roboto` ó yarn: `yarn add @fontsource/roboto`.  Si queremos usar los iconos, también los instalamos por npm: `npm install @mui/icons-material` o yarn: `yarn add @mui/icons-material`. Se puede ver en el **package.json**:

```
  "dependencies": {
    "@mui/icons-material": "^5.11.16",
    "@mui/material": "^5.13.0"
  },
```


### 03-react-ejercicios

Cree 5 componentes para practicar el **CRUD** (Create, Read, Update, Delete)

- 1 - El 1ro es un **formulario** con los primeros elementos guardados en un array de objetos, se simula el CRUD. Se puede CREAR in registro. Se puede EDITAR un registro. También se puede eliminar.

- 2 - El 2do ya realiza un **FETCH**, simulando un servidor con JSON server, para poder realizar las 4 operaciones del CRUD. Se crea un **helper** **helpHttp** para tener toda la lógica del GET, POST, PUT y DELETE al servidor, automatizando la **petición fetch** y utilizanod el **abort controller** por si a los 3 segundo no recibo respuesta del servidor, corto(finalizo) la petición. Como este **helper** es de VAnilla JavaScript, se puede reutilizar para un proyecto tanto de REact como de JavaScript. Se realiza un componente para mostrar los mensajes de error.

- 3 - El 3ro es un **buscador de canciones**. Se utilizan las API:

- [https://theaudiodb.com/api_guide.php](https://theaudiodb.com/api_guide.php) 

- [https://lyricsovh.docs.apiary.io/](https://lyricsovh.docs.apiary.io/)

- 4 - El 4to es un **select anidados** para poder ir selecionando el estado, la ciudad y el municipio de México. Hay renderizado condicional. Se crea un custom hook para realizar el **fetch** de data a la API, utilizando un **abortController** para detener el request en caso de no obtener respuesta. Se crea un objeto error para lanzar un error personalizado en caso de tenerlo.

⚛️ Gist useFetch - [https://gist.github.com/jonmircha/11b1d5cd82474fc6c79f03836410b243](https://gist.github.com/jonmircha/11b1d5cd82474fc6c79f03836410b243)

⚛️ API Sepomex - [https://api-sepomex.hckdrk.mx/](https://api-sepomex.hckdrk.mx/)

⚛️ Token Sepomex - d81a7ac7-976d-4e1e-b7d3-b1979d791b6c

- 5 - El 5to ejericio creo un **formulario de contacto** con **validaciones con expresiones regulares** en **React**, sin necesidad de utilizar librerías para las validaciones como Formik. Y enviamos lo que se completa por email con **formsubmit**.



- 6 - **Ventana Modal**: La **prop children** de los componentes. Creamos un **componente wrapper**.

<img src="https://github.com/eugenia1984/React-con-JonMircha/assets/72580574/423d3bba-0830-4e8c-b5b1-07d12cdce6da" alt="botones para ver los modales" width=400> <br/>

<img src="https://github.com/eugenia1984/React-con-JonMircha/assets/72580574/5bcdf4d3-0fa2-4925-b24a-f4c69ca1e0bf" alt="botones para ver los modales - modal 1" width=400> <br/>

<img src="https://github.com/eugenia1984/React-con-JonMircha/assets/72580574/c8de8fc8-bb64-40b1-af56-7826d6233f5a" alt="botones para ver los modales - modal 2" width=400> <br/>

<img src="https://github.com/eugenia1984/React-con-JonMircha/assets/72580574/5c15c07a-1d97-4a26-8446-a32cf16b6d6c" alt="botones para ver los modales - modal 3 formulario de contacto" width=400> <br />

- Utilizanod de **ReactDOM** - `createPortal` puedo renderizar mi modal en un nodo distinto(id=**portal**) al que renderizo mi aplicación (con id=**root**)
- 
<img src="https://github.com/eugenia1984/React-con-JonMircha/assets/72580574/6ef2d709-b00c-4c14-9ece-07982d6498a1" alt="botones para ver los modales - modal portal" width=500>



---
---

## :star: JSON Server

`npm install -g json-server`, para instalarlo de manera global

`npm install json-server`, para instalarlo en el proyecto

Y una vez instalado, voy a **package.json** y lo veo en **dependencies**:

```
"dependencies": {
  "json-server": "^0.17.3",
  "react": "^18.2.0",
  "react-dom": "^18.2.0"
},
```

Y en el mismo archivo, en **scripts** agrego uno para levantar el servidor: `"fake-api": "json-server --watch src/api/db.json --port 5000"`

Entonces por terminal hago: `npm run fake-api`

Y veo que se está corriendo el servidor. Entonces si abro el puerto 5000 y voy al endpoint: `http://localhost:5000/santos` veo la lista de los santos

---

## :star: Loader animado

[https://loading.io/](https://loading.io/)

---

## Shortcut

`rafc` para crear un componente funcional en React

---
