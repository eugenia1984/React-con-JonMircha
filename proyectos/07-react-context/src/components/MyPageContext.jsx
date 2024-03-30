import React, { useState } from 'react'
import { Footer } from './Footer'
import { Main } from './Main'
import { Header } from './Header'
import { ThemeProvider } from '../context/ThemeContext'
import { LanguageProvider } from '../context/LanguageContext'
import { AuthProvider } from '../context/AuthContext'

// const initialTheme = 'light'
//const initialLanguage = 'es'
// const initialAuth = null
// const translations = {
//   es: {
//     headerTitle: 'Mi aplicación CON Context API',
//     headerSubtitle: 'Mi cabecera',
//     headerLight: 'Claro',
//     headerDark: 'Oscuro',
//     buttonLogin: 'Iniciar Sesión',
//     buttonLogout: 'Cerrar Sesión',
//     mainWelcome: 'Bienvenido/a invitado/a',
//     mainHello: 'Hola Usuario/a',
//     mainContent: 'Mi contenido principal',
//     footerTitle: 'Mi pié de página'
//   },
//   en: {
//     headerTitle: 'My application with Context API',
//     headerSubtitle: 'My header',
//     headerLight: 'Light',
//     headerDark: 'Dark',
//     buttonLogin: 'Login',
//     buttonLogout: 'Logout',
//     mainWelcome: 'Welcome Guest',
//     mainHello: 'Hello User',
//     mainContent: 'My main content',
//     footerTitle: 'My footer'
//   }
// }

export const MyPageContext = () => {
  // const [theme, setTheme] = useState(initialTheme)
  // const [language, setLanguage] = useState(initialLanguage)
  // const [texts, setTexts] = useState(translations[language])
  // const [auth, setAuth] = useState(initialAuth)

  // const handleTheme = (e) => {
  //   // console.log('handleTheme: ',e.target.value)
  //   if (e.target.value === 'light') {
  //     setTheme('light')
  //   } else {
  //     setTheme('dark')
  //   }
  // }

  // const handleLanguage = (e) => {
  //   // Si hay mas de un idioma puede ser un switch
  //   if (e.target.value === 'es') {
  //     setLanguage('es')
  //     setTexts(translations.es)
  //   } else {
  //     setLanguage('en')
  //     setTexts(translations.en)
  //   }
  // }

  // const handleAuth = (e) => {
  //   if (auth) {
  //     setAuth(null)
  //   } else {
  //     setAuth(true)
  //   }
  // }

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
}
