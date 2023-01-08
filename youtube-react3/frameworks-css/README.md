# <img src="https://img.icons8.com/ultraviolet/48/null/react--v1.png"/> App para ir practicando los conceptos de React

## :star: ¿ Qué se puede ver?

Como manejar estilos en React con las sigueintes librerías:

- [<img src="https://img.icons8.com/color/40/null/bootstrap.png"/> **BOOTSTRAP**](https://getbootstrap.com/)

- [<img src="https://bulma.io/images/bulma-logo.png" alt="bulma icon" width="112" height="28"/> **BULMA**](https://bulma.io/)

- [**REACT BOOTRSTRAP**](https://react-bootstrap.github.io/)

- [**MATERIAL UI**](https://mui.com/)

---


## :star: Dependencias

```JSX
"dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-scripts": "5.0.1"
  },
```

---

## Proyectos

- [**1 -** <img src="https://img.icons8.com/color/40/null/bootstrap.png"/> **BOOTSTRAP**](https://getbootstrap.com/)

aaplicando el **CDN** en el **index.html** dentro de (`public`), con los **styles** de CSS y el **script** para el JavaScript. Otro modo era instalarlo mediante **npm**. Copiamos una **navbar** de Bootrstrap y ahcemos algunos ajustes, como por ejemplo cambiar **class** por **className**, o **tabindex** convertirla a **tabIndex**. Tambien tengo que cambiar en los ```href``` el **index.html** a **/** ó a **#**. 

Y funciona perfectamente el menu de navegación para desktop:
![image](https://user-images.githubusercontent.com/72580574/210280300-95b05c16-d5a6-480f-88f6-8a67972f758a.png)


Y para mobil:

<img src="https://user-images.githubusercontent.com/72580574/210280323-7e11e71d-e088-49e1-a978-ea65c9971402.png" wtdht=600 alt="navbar mobil">

Y fui modificando un poco el codigo para tenerlo más componetizado:

![image](https://user-images.githubusercontent.com/72580574/210280725-19aff803-c3eb-4c21-a700-bf1aa88c1673.png)

![image](https://user-images.githubusercontent.com/72580574/210280809-38305dc9-b20e-4f31-a4e6-e8048d54a10f.png)

---


- [**2 -** <img src="https://bulma.io/images/bulma-logo.png" alt="bulma icon" width="112" height="28"/> **BULMA**](https://bulma.io/)

Se puede instalar por npm, con: ```npm install bulma``` o por **CDN** con ``` <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />```. Copie y arme una card:

![image](https://user-images.githubusercontent.com/72580574/210280374-2f638ccc-5d11-4f1a-b1c2-d5a78ea6e106.png)

Asi tengo el codigo, cambie un poco lo que se veia en el video, y fui armando sub componentes.

![image](https://user-images.githubusercontent.com/72580574/210280627-c972bee8-49cb-4ab9-89bd-fd01eaa73a99.png)

---


- [**3 - REACT BOOTSTRAP**](https://react-bootstrap.github.io/). Hay que instalar dependencias:

-con **npm**: ```npm install react-bootstrap bootstrap```

---


- [**4 - MATERIAL UI**](https://mui.com/)

Basado en las guias de estilos de de Google (**Material CSS**), hay que instalar:

-con npm: ```npm install @mui/material @emotion/react @emotion/styled```

-con **yarn**: ```yarn add @mui/material @emotion/react @emotion/styled```

-> Se le pueden agregar **styles components**:

-con **npm**: ```npm install @mui/material @mui/styled-engine-sc styled-components```

-con **yarn**: ```yarn add @mui/material @mui/styled-engine-sc styled-components```

-> Como utilizan la fuente **Roboto**, se puede instalar:

-con **npm**: ```npm install @fontsource/roboto```

-con **yarn**: ```yarn add @fontsource/roboto```

Y se pueden utilizar importando, de este modo:
```JSX
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
```

-o como fuente de Google agregando en el `<head>`:
```
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
/>
```

-> También tiene **íconos**, que se pueden instalar :

-con **npm**: ```npm install @mui/icons-material```

-con **yar**: ```yarn add @mui/icons-material```


-> Las **Material Icon Fonts** también se pueden instalar en el `head`:
```
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/icon?family=Material+Icons"
/>
```


---



