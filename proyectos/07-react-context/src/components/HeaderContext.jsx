import { useContext } from 'react'
import ThemeContext from '../context/ThemeContext'
import LanguageContext from '../context/LanguageContext'
import AuthContext from '../context/AuthContext'

export const HeaderContext = () => {
  const { theme, handleTheme } = useContext(ThemeContext)
  const { texts, handleLanguage } = useContext(LanguageContext)
  const { auth, handleAuth } = useContext(AuthContext)
  const {
    headerTitle,
    headerSubtitle,
    headerLight,
    headerDark,
    buttonLogin,
    buttonLogout
  } = texts

  return (
    <header className={theme}>
      <h2>{headerTitle}</h2>
      <h3>{headerSubtitle}</h3>
      <select name="language" onChange={handleLanguage}>
        <option value="es">ES</option>
        <option value="en">EN</option>
      </select>
      <input
        type="radio"
        name="theme"
        id="light-context"
        onClick={handleTheme}
        value="light"
      />
      <label htmlFor="light-context">{headerLight}</label>
      <input
        type="radio"
        name="theme"
        id="dark-context"
        onClick={handleTheme}
        value="dark"
      />
      <label htmlFor="dark-context">{headerDark}</label>
      <button onClick={handleAuth}>{auth ? buttonLogin : buttonLogout}</button>
    </header>
  )
}
