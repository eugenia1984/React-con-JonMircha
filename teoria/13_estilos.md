# <img width="30" height="30" src="https://img.icons8.com/office/30/react.png" alt="react"/>  Estilos en React


## <img width="30" height="30" src="https://img.icons8.com/office/30/react.png" alt="react"/>  Formas de aplicar estilos

Hay muchas formas de aplicar estilos en React.

1. Con **CSS, en un archivo externo**, en el componente nombramos a la clase con **className**, y en un archivo **.css** nombramos a esa clase y le aplicams el estilo. Recordar siempre **importar la hoja de estilos** en el componente de React.

2. Aplicando **estilos en línea**, en este caso tengo que tener las {} porque voy a poner código JavaScript y luego dentro otras {} ya que v a aser un objeto, las key son los atributos de CSS que van en **camelCase** y el value es el valor del atributo, ace es todo como String por loq ue va entre **" "**. Ejemplo en código :

```JSX
<h3 className="bg-react" style={{borderRadius:".75rem", margin:"1rem"}}>Estilos en línea (atributo style)</h3>
```

Si voy a tener bastantes cosas de estilos en línea puedo guardarlo en una variable como un objeto.

```JSX
import React from "react";
import "./Estilos.css";

export default function Estilos() {
  let myStyles = {
    borderRadius: "5rem",
    margin: "2rem auto",
    maxWith: "50%",
  };

  return (
    <section className="estilos">
      <h2>Estilos CSS en React</h2>
      <h3 className="bg-react">Estilos en hojas CSS externa</h3>
      <h3
        className="bg-react"
        style={{ borderRadius: ".75rem", margin: "1rem" }}
      >
        Estilos en línea (atributo style)
      </h3>
      <h3
        className="bg-react"
        style={myStyles}
      >
        Estilos en línea (guardando en variable)
      </h3>
    </section>
  );
}
```

3. Aplicando **normalize** con **@import-normalize;** en una hoja superior, que rije toda la aplicación como un **index.css** o **App.css**.

4. Aplicando **estilos como módulos**. El nombre de la hoja de estilos debe ser : **Nombre.module.css**, por ejemplo ```Estilos.module.css```:

```CSS
.error {
  background-color: #dc3545;
}

.success {
  background-color: #198764;
}
```

Al importarlo le doy un alias: 
```JSX
import moduleStyles from "./Estilos.module.css";
```

Y lo utilizo:

```JSX
<h3 className={moduleStyles.error}>Estilos con módulos</h3>
      <h3 className={moduleStyles.success}>Estilos con módulos</h3>
```

5. Utilizando **SASS**, con la terminal: ```npm install node-sass```.

Y me creo el archivo de extensión **.scss**.

6. Con [**styled-components**](https://styled-components.com/).

Instalación:

```bash
# with npm
npm install --save styled-components

# with yarn
yarn add styled-components
```

**Single file component**, donde se tiene presentación, contenido y lógica del componente en un mismo archivo.

Tiene mapeado todos los elementos de React que luego se renderiza como **etiqueta HTML**, y con **template strings** le damos estilos.

En VSC es recomendable utilizar la extensión **styled-components-snippets** de **Jon Wheeler** para no ver los estilos como cadenas de texto.


-> Le paso un **color** como **propiedad**:

```JSX
<MyH3 color="#61dafb">
  Hola Soy un h3 estilizado con styled-components
</MyH3>
```

```JSX
const MyH3 = styled.h3`
  color: ${(props) => props.color};`
```

-> También lo puedo desestructurar y al ser JavaScript uedo usar **ternarios**:
```JSX
color: ${({ color }) => color || "#000"};
```

-> Puedo usar las **animaciones** con **keyframe**:

```JSX
import styled, {  keyframes} from "styled-components";

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  
  100% {
    opacity: 1;
    }
`;

  const MyH3 = styled.h3`
  animation: ${fadeIn} 5s ease-out;`
  ```

-> Con **ThemeProvider** puedo usar para el light / dark mode.

```JSX
import styled, {  ThemeProvider } from "styled-components";

const light = {
  color: "#222",
  bgColor: "#DDD",
};

const dark = {
  color: "#DDD",
  bgColor: "#222",
};

const Box = styled.div`
  padding: 1rem;
  margin: 1rem;
  color: ${({ theme }) => theme.color};
  background-color: ${({ theme }) => theme.bgColor};
`;
```

Es como un proveedor, genera un **contexto**, me va a pedir un **objeto**, que pueden ser propiedades que voy a ir definiendo, en este ejemplo los **light** y **dark**.


-> Se puede trabajar **herencia**:

```JSX
const BoxRounded = styled(Box)`
  border-radius: 1rem;
`;
```

-> Aplicar **estilos globales**, se suelen aplicar en **index.css** o en **App.css**.

```JSX
const GlobalStyle = createGlobalStyle`
  h2 {
    padding: 2rem;
    background-color: #fff;
    color: #61dafb;
    text-transform: uppercase;
  }
`;
  ```

### ¿ Y cómo lo estructuramos ?

- Algunos nombran al archivo .css del mismo nombre que el componente y lo guardan en la misma carpeta.

- Dentro de la carpeta tiene un archivo **index.js** con el componente y otro **index.css** con los estilos.

---