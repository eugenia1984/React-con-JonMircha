# :star: CRUD with React

Cree 6 componentes para practicar el **CRUD** (Create, Read, Update, Delete)

---

1. El 1ro es un **formulario** con los primeros elementos guardados en un array de objetos, se simula el CRUD.

-Se puede CREAR in registro:

<img src="https://github.com/eugenia1984/React-con-JonMircha/assets/72580574/ed1b73cd-8489-4aae-b518-a25dbd5f7ebe" alt="crud" width=500>

-Se puede EDITAR un registro

<img src="https://github.com/eugenia1984/React-con-JonMircha/assets/72580574/c6e6f952-7593-4502-9afd-2c178844d190" alt="crud" width=500>


-También se puede ELIMINAR

---

2. El 2do ya realiza un **FETCH**, simulando un servidor con JSON server, para poder realizar las 4 operaciones del CRUD.

Se crea un **helper** **helpHttp** para tener toda la lógica del GET, POST, PUT y DELETE al servidor, automatizando la **petición fetch** y utilizanod el **abort controller** por si a los 3 segundo no recibo respuesta del servidor, corto(finalizo) la petición.

Como este **helper** es de VAnilla JavaScript, se puede reutilizar para un proyecto tanto de REact como de JavaScript.

Se realiza un componente para mostrar los mensajes de error:

<img src="https://github.com/eugenia1984/React-con-JonMircha/assets/72580574/ab5a0d5c-9547-4271-80d2-3bea9722570e" alt="crud" width=500>



---

3. El 3ro es un **buscador de canciones**

Se utilizan las API:

- [https://theaudiodb.com/api_guide.php](https://theaudiodb.com/api_guide.php) 

- [https://lyricsovh.docs.apiary.io/](https://lyricsovh.docs.apiary.io/)


<img src="https://github.com/eugenia1984/React-con-JonMircha/assets/72580574/fdddf581-fe38-4ec7-865b-721cb3df74d6" alt="crud" width=500>


<img src="https://github.com/eugenia1984/React-con-JonMircha/assets/72580574/1f7a3faf-760e-4ee4-88e5-788916d5e909" alt="crud" width=500>


---

4. El 4to es un **select anidados** para poder ir selecionando el estado, la ciudad y el municipio de México. 

Hay renderizado condicional. 

Se crea un custom hook para realizar el **fetch** de data a la API, utilizando un **abortController** para detener el request en caso de no obtener respuesta. Se crea un objeto error para lanzar un error personalizado en caso de tenerlo.

⚛️ Gist useFetch - [https://gist.github.com/jonmircha/11b1d5cd82474fc6c79f03836410b243](https://gist.github.com/jonmircha/11b1d5cd82474fc6c79f03836410b243)

⚛️ API Sepomex - [https://api-sepomex.hckdrk.mx/](https://api-sepomex.hckdrk.mx/)

⚛️ Token Sepomex - d81a7ac7-976d-4e1e-b7d3-b1979d791b6c

---

5. El 5to ejericio creo un **formulario de contacto** con **validaciones con expresiones regulares** en **React**, sin necesidad de utilizar librerías para las validaciones como Formik.

Y enviamos lo que se completa por email con **formsubmit**


Asi es el formualrio:

<img src="https://github.com/eugenia1984/React-con-JonMircha/assets/72580574/d8a28ad4-7db2-4f80-a7bb-05f8f3c7404f" alt="formulario de contacto" width=500>


Se ve como se corrobora que este completo y coincida con las expresiones regulares de la validacion:

<img src="https://github.com/eugenia1984/React-con-JonMircha/assets/72580574/f8b2cfe9-1b8e-4c8e-bd1d-d68431c0d0b6" alt="formulario de contato" width=500>


---

6. **Ventana Modal**: La **prop children** de los componentes. Creamos un **componente wrapper**.

<img src="https://github.com/eugenia1984/React-con-JonMircha/assets/72580574/423d3bba-0830-4e8c-b5b1-07d12cdce6da" alt="botones para ver los modales" width=500>

<img src="https://github.com/eugenia1984/React-con-JonMircha/assets/72580574/5bcdf4d3-0fa2-4925-b24a-f4c69ca1e0bf" alt="botones para ver los modales - modal 1" width=500>

<img src="https://github.com/eugenia1984/React-con-JonMircha/assets/72580574/c8de8fc8-bb64-40b1-af56-7826d6233f5a" alt="botones para ver los modales - modal 2" width=500>

<img src="https://github.com/eugenia1984/React-con-JonMircha/assets/72580574/5c15c07a-1d97-4a26-8446-a32cf16b6d6c" alt="botones para ver los modales - modal 3 formulario de contacto" width=500>



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

Entonces si abro el puerto 5000 y voy al endpoint: `http://localhost:5000/santos` veo la lista de los santos

---

## :star: Loader animado

[https://loading.io/](https://loading.io/)

---

## Shortcut

`rafc` para crear un componente funcional en React

---
