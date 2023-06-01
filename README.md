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

- **peticiones asíncronas (AJAX y API´s)**, utilizando **fetch**, **custom hooks**, utilizar **try-catch** para manejar los **errores** y personalizar los mensajes. También se utilizaron funciones asíncronas con: **async-await**. Y se utiliza el **abortController** para que si pasa más el tiempo estipulado y no se obtuvo resuesta se finalice la petición.

- **hooks**: **useState**, **useEffect**, **useRef**.

- **custom hooks**

- **formularios**, manejando el estado con React y formularios descontrolados. Selects anidados, el segundo select depende de que se selecciona en el primero. **Validaciones** con **expresiones regulares**. Se envía por email gracias a **formsubmit**. Creación de un formulario, para realizar un CRUD(Create, Read, Update, Delete) y mostrar la información en una tabla.

- aplicando **estilos** en React...

...estilos en línea, con el atributo **style** en forma de objeto de JavaScript

... estilos en una hoja de estilos aparte

... aplicando **normalize**

... CSS con **módulos**

... con [**SASS**](https://sass-lang.com/)

... con [**styled components**](https://styled-components.com/)

- algunos de los Framewors de React para manejar estilos: [<img src="https://img.icons8.com/color/30/null/bootstrap.png"/> **Bootstrap**](https://getbootstrap.com/), [**React Bootstrap**](https://react-bootstrap.github.io/), [<img src="https://bulma.io/images/bulma-logo.png" alt="bulma icon" width="56" height="14"/> **Bulma**](https://bulma.io/) y [**MUI**](https://mui.com/).

- **Ventana modal** para ver el concepto de **prop children** y **portales**.

---

## [<img src="https://img.icons8.com/ios-filled/30/null/opened-folder.png"/> **02-frameworks-css**](https://github.com/eugenia1984/React-con-JonMircha/tree/main/proyects/02-frameworks-css)

Donde se ven algunos de los frameworks para trabajar estilos con React.

-[<img src="https://img.icons8.com/color/36/null/bootstrap.png"/> **Bootstrap**](https://getbootstrap.com/) y **Bulma** 

-[<img src="https://bulma.io/images/bulma-logo.png" alt="bulma icon" width="56" height="14"/> **Bulma**](https://bulma.io/)

- [**React Bootrstrap**](https://react-bootstrap.github.io/), que incluye componentes ya armados.

- [**MUI**](https://mui.com/)

---


## <img src="https://img.icons8.com/ios-filled/30/null/opened-folder.png"/>  [03 -react-ejercios](https://github.com/eugenia1984/React-con-JonMircha/tree/main/proyects/03-react-ejercicios)

Cree 6 componentes para practicar el **CRUD** (Create, Read, Update, Delete)

- 1 - El 1ro es un **formulario** con los primeros elementos guardados en un array de objetos, se simula el CRUD. Se puede CREAR in registro. Se puede EDITAR un registro. También se puede eliminar.

- 2 - El 2do ya realiza un **FETCH**, simulando un servidor con JSON server, para poder realizar las 4 operaciones del CRUD. Se crea un **helper** **helpHttp** para tener toda la lógica del GET, POST, PUT y DELETE al servidor, automatizando la **petición fetch** y utilizanod el **abort controller** por si a los 3 segundo no recibo respuesta del servidor, corto(finalizo) la petición. Como este **helper** es de VAnilla JavaScript, se puede reutilizar para un proyecto tanto de REact como de JavaScript. Se realiza un componente para mostrar los mensajes de error.

- 3 - El 3ro es un **buscador de canciones**. Se utilizan las API:

- [https://theaudiodb.com/api_guide.php](https://theaudiodb.com/api_guide.php) 

- [https://lyricsovh.docs.apiary.io/](https://lyricsovh.docs.apiary.io/)

- 4 - El 4to es un **select anidados** para poder ir selecionando el estado, la ciudad y el municipio de México. Hay renderizado condicional. Se crea un custom hook para realizar el **fetch** de data a la API, utilizando un **abortController** para detener el request en caso de no obtener respuesta. Se crea un objeto error para lanzar un error personalizado en caso de tenerlo.

⚛️ Gist useFetch - [https://gist.github.com/jonmircha/11b1d5cd82474fc6c79f03836410b243](https://gist.github.com/jonmircha/11b1d5cd82474fc6c79f03836410b243)

⚛️ API Sepomex - [https://api-sepomex.hckdrk.mx/](https://api-sepomex.hckdrk.mx/)

⚛️ Token Sepomex - d81a7ac7-976d-4e1e-b7d3-b1979d791b6c

- 5 - El 5to ejercicio creo un **formulario de contacto** con **validaciones con expresiones regulares** en **React**, sin necesidad de utilizar librerías para las validaciones como Formik. Y enviamos lo que se completa por email con **formsubmit**.

- 6 - El 6to ejercicio creo una **Ventana Modal**: La **prop children** de los componentes. Creamos un **componente wraper**

---


## <img src="https://img.icons8.com/ios-filled/30/null/opened-folder.png"/>  [04-react-router-6](https://github.com/eugenia1984/React-con-JonMircha/tree/main/proyects/04-react-router-6)

## <img src="https://img.icons8.com/ios-filled/30/null/opened-folder.png"/>  [05-react-router-6](https://github.com/eugenia1984/React-con-JonMircha/tree/main/proyects/05-react-router-6)

- Vemos **React-router versión 6** y las diferencias con **react-router versión 5**

- `BrowserRouter`, `Routes`, `Route` para el enrutamiento de la aplicación. También vi **rutas anidadas** y **rutas dinámicas**.

- `Link` y `NavLink` para la barra de navegación.

- Hooks: `useLocation` para tener los parametros de busqueda de la URL(es un **query param**), `useNavigate` para tener el historico del navegador, `useSearchParams` para modificar dinámicamente los parámetros de la URL usamos los **query params**, sirve para la paginación (tener en cuenta que son siempre **string** si necesito sumar o restar tengo que csear a `Number` o `parseInt`).

- **Redirecciones** de páginas con `useNavigate`

- Ya no está la propiedad `exact` como teníamso en la versión 5.

You don't need to use an exact prop on ``<Route path="/">`` anymore. This is because all paths match exactly by default. If you want to match more of the URL because you have child routes use a trailing ``*`` as in ``<Route path="users/*">``.

- **HashRouter**, usando el objeto **location** tenemos accesos a todas las partes que forman la URL. Utilizamos el `<HashRouter>` de react-router-dom para que me agregue `/#/` en la URL


-> En los videos se trabajó con **react-router-dom** versión 5, pero yo lo actualicé con la versión 6 a mis ejercicios. Se reutilizó el ejercicio **CRUD API** y agregó e enrutamiento.

---

## <img src="https://img.icons8.com/ios-filled/30/null/opened-folder.png"/>  [06-react-memorizacion](https://github.com/eugenia1984/React-con-JonMircha/tree/main/proyects/06-react-memorizacion)

## React Memo

- Se encarga de memorizar un componente

- Lo vuelve a memorizar al momento de que sus props cambian

- Evita re-renderizados

- Hay que evitarlo en la medida de lo posible, pues podría ser más costosa la tarea de memorización que el re-renderizado del componente.

- Usalo cuando...

... tenemos muchos elementos renderizados en una lista

... llamamos datos de APIs

... Un componente se vuelve muy pesado

... salen alertas de rendimiento en la consola


## useCallback


```JSX
// const add = () => setCounter(counter + 1)
const add = useCallback(() => setCounter(counter + 1), [counter])
```

- Memoriza una función, para no volverla a definir en cada render.

- Úsalo siempre que se pase una función como prop a un componente memorizado.

- Úsalo siempre que se pase una función como parámetro de un efecto.

## useMemo

- Memoriza un valor calculado, es decir, el resultado de una función.

- Genera propiedades computadas.

- Úsalo en procesos pesados.

---

## <img src="https://img.icons8.com/ios-filled/30/null/opened-folder.png"/>  [07-react-context](https://github.com/eugenia1984/React-con-JonMircha/tree/main/proyects/07-react-context)


- [Documentación](https://react.dev/reference/react#context-hooks)

- Para compartir variables de estado global, un ejemplo es para elegir el modo claro/oscuro, o para cambiar el idioma. Es buena práctica que tengamos cada contexto para cada variable que necesitamos.

- De ejercicio se crean 3 context para: cambiar tema claro/oscuro, hacer inicio de sesión de usuario y cambiar idioma.

---

## Tecnologías 🛠️

- <img src="https://img.icons8.com/fluency/30/null/html-5.png"/> **HTML5**

- <img src="https://img.icons8.com/fluency/30/null/css3.png"/> **CSS3**

- **Bootstrap**, para aplicar estilos.

- <img src="https://img.icons8.com/color/30/null/javascript--v1.png"/> **JavaScript**

- <img src="https://img.icons8.com/officel/30/null/react.png"/> **React**

- **React Bootstrap**, para aplicar estilos y utilizar los componentes.

- **MUI**, para aplicar estilos y utilizar los componentes.

- [**Vite**](https://vitejs.dev/), para inicializar los proyectos.

- [JSON server](https://www.npmjs.com/package/json-server), para poder simular los llamados a una API en el ejercicio del CRUD, teniendo una mock en JSON.

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

## Si te querés copiar este proyecto para verlo local

1. Crea un directorio local, ingresa al mismo y abre la terminal en el.

2. Copia el repositorio con git: `git clone https://github.com/eugenia1984/React-con-JonMircha.git .`

3. Instala las dependencias: `npm install` ó `ipm i`

4. Corre el proyecto en tu navegador con `npm run dev`, para lo cual antes debes estar situado dentro del proyecto que quieres ver, por ejemplo `/proyects/01-react-basicos`.

---
## Por favor: 🎁

- Comparte este proyecto con otros 📢

- Muchas gracias 🤓.

---

## Notas

Agradezco su interés en este proyecto ⌨️ con ❤️ de [María Eugenia Costa](https://github.com/eugenia1984) 😊 y sígueme en [LinkedIn](http://www.linkedin.com/in/maríaeugeniacosta)

---


