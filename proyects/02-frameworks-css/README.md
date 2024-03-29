## [<img src="https://img.icons8.com/ios-filled/30/null/opened-folder.png"/> **02-frameworks-css**](https://github.com/eugenia1984/React-con-JonMircha/tree/main/proyects/02-frameworks-css)

Donde se ven algunos de los frameworks para trabajar estilos con React.

Como se va a trabajar con varias librerìas, para que no se _pisen_ los estilos, en el **index.html** se van a ir comendantdo los links al CDN para ir visualizando de a una librería.

Tambén dejo comentado en **app.jsx** el componente que está utilizando el Framework comentado. Así solo se isualiza el que está utilizando el CDN del Framework CSS que está activo en index.html.

---


- [<img src="https://img.icons8.com/color/36/null/bootstrap.png"/> **Bootstrap**](https://getbootstrap.com/)

Recordar que también está [**React Bootstrap**](https://react-bootstrap.github.io/) que incluye componentes ya armados.

-Agrego un NavBar de Bootrstrap, haciendo los ambios necesarios porque utilizamos JSX(**Class** pasa a ser **className**, se **Cierran** toas las etiquetas html, etc):

Versión Mobil:

<img src="https://github.com/eugenia1984/React-con-JonMircha/assets/72580574/2fa3900c-26b4-4e6e-8c20-eff02a1d6bd5" width="400" alt="vista mobile de la barra de navegacion">

Versión Desktop:

<img src="https://github.com/eugenia1984/React-con-JonMircha/assets/72580574/b8f7c4c2-820e-48a9-a253-99e370294995" width="400" alt="vista desktop de la barra de navegacion">

---


- [<img src="https://bulma.io/images/bulma-logo.png" alt="bulma icon" width="56" height="14"/> **Bulma**](https://bulma.io/)

Agrego una card y realizo los cambios necesarios, ya que trabajo con JSX (**class** pasa a **className**, **autocierro** todas las tag `<img />`, **datetime** pasa a **dateTime**, agregar **href** en la tag `<a>`).


<img src="https://github.com/eugenia1984/React-con-JonMircha/assets/72580574/a96d5e18-fa18-4684-ac98-c7548973ba6d" width="400" alt="card con estilos de Bulma">

---


- [**React Bootrstrap**](https://react-bootstrap.github.io/)

1. Instalo por npm Bootstrap y React-Bootstrap: `npm install react-bootstrap bootstrap`, también se puede usar instalando con `yarn`

2. En el **package.json** puedo confirmar que se instaló bien:

```
 "dependencies": {
    "bootstrap": "^5.2.3",
    "react-bootstrap": "^2.7.4"
  },
```

-Version mobile:

<img src="https://github.com/eugenia1984/React-con-JonMircha/assets/72580574/3a8c1819-92f0-4ca3-b7d5-f7778d7e5a91" width="400" alt="vista mobil de la barra de navegacion">

-Version Desktop

<img src="https://github.com/eugenia1984/React-con-JonMircha/assets/72580574/252b12e5-1641-4268-9530-d1fd9d3c7214" width="400" alt="vista mobil de la barra de navegacion">


---


- [**MUI**](https://mui.com/)

1. Se puede instalar por npm: `npm install @mui/material @emotion/react @emotion/styled` o por yarn: `yarn add @mui/material @emotion/react @emotion/styled`.

2. Si le quiero agregar **Styled-components**, con npm: `npm install @mui/material @mui/styled-engine-sc styled-components` o con yarn: `yarn add @mui/material @mui/styled-engine-sc styled-components`

3. Como utiliza la fuente **Roboto** se puede instalar por **CDN** desde Google Fonts, o por npm: `npm install @fontsource/roboto` ó yarn: `yarn add @fontsource/roboto`

4. Si queremos usar los iconos, también los instalamos por npm: `npm install @mui/icons-material` o yarn: `yarn add @mui/icons-material`

5. Se puede ver en el **package.json**:

```
  "dependencies": {
    "@mui/icons-material": "^5.11.16",
    "@mui/material": "^5.13.0"
  },
```

<img src="https://github.com/eugenia1984/React-con-JonMircha/assets/72580574/c7210d2a-df2a-4375-a42c-226668c35248" width="400" alt="carta con Material UI">



---
