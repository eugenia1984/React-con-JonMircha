import { useContext } from 'react'
import ThemeContext from '../context/ThemeContext'
import LanguageContext from '../context/LanguageContext'

export const FooterContext = () => {
  const { theme } = useContext(ThemeContext)
  const { texts } = useContext(LanguageContext)
  const { footerTitle } = texts

  return (
    <footer className={theme}>
      <h4>{footerTitle}</h4>
    </footer>
  )
}
