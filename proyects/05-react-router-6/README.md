# :star: react-router-DOM (versión 6)

---

- En los videos de Jon hicieron los ejercicios con react-router-DOM versión 5, pero yo lo hice en la versión 6, y en vez de crear el proyecto de Create React App lo cree con **Vite**.

- Instalo con: `npm install react-router-dom` ó  `npm i react-router-dom`

---

## Temas vistos:

- `BrowserRouter`, `Routes`, `Route` para el enrutamiento de la aplicación. También vi **rutas anidadas** y **rutas dinámicas**.

- `Link` y `NavLink` para la barra de navegación.

- Hooks: `useLocation` para tener los parametros de busqueda de la URL(es un **query param**), `useNavigate` para tener el historico del navegador, `useSearchParams` para modificar dinamicamente los parámetros de la URL usamos los **query params**, sirve para la paginación (tener en cuenta que son simepre **string** si necesito sumar o restar tengo que csear a `Number` o `parseInt`).

- **Redirecciones** de páginas con `useNavigate`

- Ya no está la propiedad `exact` como teníamso en la versión 5.

You don't need to use an exact prop on ``<Route path="/">`` anymore. This is because all paths match exactly by default. If you want to match more of the URL because you have child routes use a trailing ``*`` as in ``<Route path="users/*">``.

- **HashRouter**, usando el objeto **location** tenemos accesos a todas las partes que forman la URL. Utilizamos el `<HashRouter>` de react-router-dom para que me agregue `/#/` en la URL

---

## Reutilizamos ejercicios

- Volvemos a utilizar los ejercicios de la **búsqueda de canciones** y el **CRUD API** (recordar que en este ejercicio para traer la informacion hay que tneer en otra terminal corriendo el server `http://localhost:5000/santos`, levantandolo con el comando: ` npm run fake-api` porque usamos **JSON server**). Le agregamos el enrutado.



- READ: 

<img src="https://github.com/eugenia1984/React-con-JonMircha/assets/72580574/6f7646ef-e6a5-4cd0-bf91-7a07c47a55de" alt="CRUD" width=400> <br/>

- UPDATE:

<img src="https://github.com/eugenia1984/React-con-JonMircha/assets/72580574/ceb10206-405d-4924-b8db-de774fb50ae2" alt="CRUD" width=400> <br/>

- CREATE:

<img src="https://github.com/eugenia1984/React-con-JonMircha/assets/72580574/bf2cd1a6-7b32-4aa7-b738-40c17829305d" alt="CRUD" width=400> <br/>

- DELETE: 

<img src="https://github.com/eugenia1984/React-con-JonMircha/assets/72580574/e0116708-86c4-4bea-be12-9634e7fd6baa" alt="CRUD" width=400> <br/>

---
