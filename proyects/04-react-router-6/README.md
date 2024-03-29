# :star: 04-react-router-6

---

## Diferencias entre: React-router versión 6 y versión 5

- En la versión 5 se englobaba todo en el componente `<Switch>` y en la versión 6 se llama `<Routes>`.

- En el componente `<Route>` para llamar al componente que se va a renderiazar en la ruta se lo podía nombrar como: `component` o `children` lo que resultaba confuso, ahora se utiliza el **atributo** `element` en la versión 6.

- El componente `<NavLink>`, que dandole una clase de css que lo diferencia se va a amrcar en que link se está actualmnte, como las páginas qeu marcan en el NavBar en que seccion están. Ejemplo:

```JSX
<NavLink
  to="/messages"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""
  }
>
  Messages
</NavLink>
```

- El `path="*"` para cuando tengan una ruta que no exite, tenemos la ruta de error personalizada.

- **Redireccionamiento** con el componente `<Navigate to="/">` en el atributo **to** le indico a la ruta que quiero me re dirija. Se usa para redireccionar rutas viejas a las nuevas secciones.

- **Rutas dinámicas** pasando **parametros** en la URL, utilizando el **hook** `useParams`.

- **hook** `useNavigate`, que guarda todo el historial de la navegación (el recorrido)

---

## Rutas anidadas

**Rutas anidadas** con el componente `<Outlet>`:

```JSX
<Route path="/services" element={<Services />}>
  <Route index element={<ServicesHome />} />
  <Route path="/services/list" element={<ServicesList />} />
  <Route path="/services/guarantee" element={<ServicesGuarantee />} />
</Route>
```

Y también puedo directamente sacar *services* en las rutas anidadas, siempre y cuando no ponga el `/` va a funcionar también(react-router-dom automaticamente me agrega el `/` luego de services):

```JSX
<Route path="/services" element={<Services />}>
  <Route index element={<ServicesHome />} />
  <Route path="list" element={<ServicesList />} />
  <Route path="guarantee" element={<ServicesGuarantee />} />
</Route>
```


---

## HASHROUTER

- Para evitar el Error 404, en las rutas en producción.

- Como internamente le paga internamente el objeto window, piden que si no es necesario no se utilice. Conviene usarlo cuando la aplicación es solo del lado del front. En vez de usar el `<BrowserRouter>` se usa el `<HashRouter>`, agregando `/#/` en la URL para que no salga el error 404 si no esta del lado del servidor.


---

## Instalación

``npm install react-router-dom``

---

## ¿Qué hice?

- Componente `<NavLink>` que marca la página en que estoy.

<img src="https://github.com/eugenia1984/React-con-JonMircha/assets/72580574/2f831559-4f30-4d10-9dca-9f6ab466bdf5" width="400" />

- Rutas dinámicas pasando parámetros en la URL, utilizando el hook `useParams` y el hook `useNavigate`, que guarda tod el historial, para volver hacia atras(en el botón BACK)

<img src="https://github.com/eugenia1984/React-con-JonMircha/assets/72580574/c73feb23-fa61-49e8-839b-7e9588d3f754" width="400" />

- Rutas anidadas:

<img src="https://github.com/eugenia1984/React-con-JonMircha/assets/72580574/f8a30553-272c-4f9f-be8f-68bf33ae367c" width="400" />



---
