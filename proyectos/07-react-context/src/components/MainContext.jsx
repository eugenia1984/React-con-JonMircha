import { useContext } from 'react'
import ThemeContext from '../context/ThemeContext'
import LanguageContext from '../context/LanguageContext'
import AuthContext from '../context/AuthContext'

export const MainContext = () => {
  const { theme } = useContext(ThemeContext)
  const { texts } = useContext(LanguageContext)
  const { auth } = useContext(AuthContext)
  const { mainHello, mainWelcome, mainContent } = texts

  return (
    <main className={theme}>
      {auth ? <p>{mainHello}</p> : <p>{mainWelcome}</p>}
      <p>{mainContent}</p>
    </main>
  )
}
