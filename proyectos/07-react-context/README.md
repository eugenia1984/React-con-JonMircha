# :computer: 07-react-context

---

- Para compartir variables de estado global, un ejemplo es para elegir el modo claro/oscuro.

- Es buena práctica que tengamos cada contexto para cada variable que necesitamos.

- De ejercicio se crean 3 context para: cambiar tema claro/oscuro, hacer inicio de sesión de usuario y cambiar idioma.

---

## Sin context tengo que pasar muchas props

Ejemplo de componente **Header**:

```JSX
export const Header = ({
  theme,
  handleTheme,
  texts,
  handleLanguage,
  auth,
  handleAuth
}) => {...}
```

## Con context

No paso props, ejemplo de como queda el **return** en App:

```JSX
 return (
    <div className="my-page">
      <ThemeProvider>
        <LanguageProvider>
          <AuthProvider>
            <Header />
            <Main />
            <Footer />
          </AuthProvider>
        </LanguageProvider>
      </ThemeProvider>
    </div>
  )
```

---

## Con Context utilizando el hook useContext

1. Creamos el contexto, ejemplo:

```JSX
mport { createContext, useState } from 'react'

const LanguageContext = createContext()
```

2. Y lo exporto por defecto:

```JSX
export default LanguageContext
```

3.  Creamos el **proveedor** de los datos, por ejemplpo: `LanguageProvider`, internamente como logica v aa tener las variables de **State** y la función actualizadora(los **hnadle...** que setean los state).

4.  Me creo la constante **data** para almacenar el estado y la función actualizadora del estado:

```JSX
const data = { texts, handleLanguage }
```

5. Retorno el **provider**, ejemplo:

```JSX
<LanguageContext.Provider value={data}>{children}</LanguageContext.Provider>
```

Como estamos usando el hook **useContext** no tengo que crear el **consumer**.

6. En el componente hijo en el cual lo estoy utilizando:

... primero exporto el ...Context creado y me importo el hook useContext

... segundo lo desestructuro con useContext, por lo ya no necesito estar pasando todo por props

---
