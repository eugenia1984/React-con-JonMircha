import React, {useState } from 'react'
import { Footer } from './Footer'
import { Main } from './Main'
import { Header } from './Header'

const initialTheme = "light"

export const MyPage = () => {
  const[theme, setTheme] = useState(initialTheme)
  const handleTheme = (e) => {
    console.log(e.target.value)
    if(e.target.value === "light") {
      setTheme("light")
    } else {
      setTheme("dark")
    }
  }

  return (
    <div className="my-page">
      <Header theme={theme} handleTheme={handleTheme}/>
      <Main theme={theme} />
      <Footer theme={theme} />
    </div>
  )
}
