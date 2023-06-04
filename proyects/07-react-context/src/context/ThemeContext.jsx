import { createContext, useState } from 'react'

const ThemeContext = createContext() // para crear el contexto

const initialTheme = 'light'

// Es el Proveedor
// Se utiliza la prop children para pasarle a los componentes hijos(compartir data)
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(initialTheme)

  const handleTheme = (e) => {
    //console.log(e.target.value);
    if (e.target.value === 'light') {
      setTheme('light')
    } else {
      setTheme('dark')
    }
  }

  const data = { theme, handleTheme }

  return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>
}

export { ThemeProvider }
export default ThemeContext
