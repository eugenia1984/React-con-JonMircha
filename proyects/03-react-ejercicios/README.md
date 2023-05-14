# :star: CRUD with React

- Cree dos componentes para practicar el CRUD (Create, Read, Update, Delete)

1. El primero es un formulario con los primeros elementos guardados en un array de objetos, se simula el CRUD.

-Se puede CREAR in registro:

<img src="https://github.com/eugenia1984/React-con-JonMircha/assets/72580574/ed1b73cd-8489-4aae-b518-a25dbd5f7ebe" alt="crud" width=500>

-Se puede EDITAR un registro

<img src="https://github.com/eugenia1984/React-con-JonMircha/assets/72580574/c6e6f952-7593-4502-9afd-2c178844d190" alt="crud" width=500>

-También se puede ELIMINAR

2. El segundo ya realiza un FETCH.

---

## JSON Server

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

Y veo que se está corriendo el servidor:

```

> 03-react-ejercicios@0.0.0 fake-api
> json-server --watch src/api/db.json --port 5000


  \{^_^}/ hi!

  Loading src/api/db.json
  Done

  Resources
  http://localhost:5000/santos

  Home
  http://localhost:5000

  Type s + enter at any time to create a snapshot of the database
  Watching...
```

Entonces si abro el pueto 5000 y voy al endpoint: `http://localhost:5000/santos` veo la lista d elos santos

---