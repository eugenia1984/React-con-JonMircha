# :star2: React con Jon Mircha

---

## <img src="https://img.icons8.com/emoji/40/null/woman-technologyst.png"/> ¿ Qué ví ?

En la [<img src="https://img.icons8.com/ios-filled/30/null/opened-folder.png"/> teoria](https://github.com/eugenia1984/React-con-JonMircha/tree/main/teoria) está justamente toda al teoría y la practica del curso de React de Jon Mircha.

---

En la carpeta **proyects** están los proyectos...

## [<img src="https://img.icons8.com/ios-filled/30/null/opened-folder.png"/> **01-react-basicos**](https://github.com/eugenia1984/React-con-JonMircha/tree/main/proyects/01-react-basicos)

Donde se ve:

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


---

## [<img src="https://img.icons8.com/ios-filled/30/null/opened-folder.png"/> **02-frameworks-css**](https://github.com/eugenia1984/React-con-JonMircha/tree/main/proyects/02-frameworks-css)

Donde se ven algunos de los frameworks para trabajar estilos con React.

-[<img src="https://img.icons8.com/color/36/null/bootstrap.png"/> **Bootstrap**](https://getbootstrap.com/) y **Bulma** 

-[<img src="https://bulma.io/images/bulma-logo.png" alt="bulma icon" width="56" height="14"/> **Bulma**](https://bulma.io/)

- [**React Bootrstrap**](https://react-bootstrap.github.io/), que incluye componentes ya armados.

- [**MUI**](https://mui.com/)

---


## <img src="https://img.icons8.com/ios-filled/30/null/opened-folder.png"/>  [03 -react-ejercios](https://github.com/eugenia1984/React-con-JonMircha/tree/main/proyects/03-react-ejercicios)

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

---

## Tecnologías 🛠️

- <img src="https://img.icons8.com/fluency/30/null/html-5.png"/> **HTML5**

- <img src="https://img.icons8.com/fluency/30/null/css3.png"/> **CSS3**

- **Bootstrap**, para aplicar estilos.

- <img src="https://img.icons8.com/color/30/null/javascript--v1.png"/> **JavaScript**

- <img src="https://img.icons8.com/officel/30/null/react.png"/> **React**: conditional rendering, JSX, hooks (useState, useEffect, useRef).

- **React Bootstrap**, para aplicar estilos y utilizar los componentes.

- **MUI**, para aplicar estilos y utilizar los componentes.

- [**Vite**](https://vitejs.dev/), para inicializar los proyectos.

- [JSON server](https://www.npmjs.com/package/json-server), para poder realizar los llamados a una PI en el ejercicio del CRUD.

- [loading.io](https://loading.io/) para tener un componente que indica el estado cargando(**loading**) animado.

---

## Los proyectos fueron inicializados con VITE

Pasos:

1. ``npm create vite@latest`` -> para inicializarlo.

2. ``? Project name:  `` -> para completar con el nombre del proyecto

3. ``? Select a framework: -> React`` -> selecciono el Framework

4. ``? Select a variant: -> JavaScript + SWC`` ->  SWC es la alternativa a Babel, esa hecha con Rust

6. Me situo dentro del proyecto creado con `cd <nombre-del-nuevo-proyecto>` e instalo con: ``npm install`` ò ``pnpm install``(va más rápido)

7. **PRO TIP** instalar **ESLinter**: `npm install standard -D` y  en el package.json agrego :

```
"eslintConfig": {
    "extends": "./node_modules/standard/eslintrc.json"
  }
```

8. Corro el proyecto: ``npm run dev``

---
## Por favor: 🎁

- Comparte este proyecto con otros 📢

- Muchas gracias 🤓.

---

## Notas

Agradezco su interés en este proyecto ⌨️ con ❤️ de [María Eugenia Costa](https://github.com/eugenia1984) 😊 y sígueme en [LinkedIn](http://www.linkedin.com/in/maríaeugeniacosta)

---


