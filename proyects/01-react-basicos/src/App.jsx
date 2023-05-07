import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NameForm from './components/atoms/NameFom'
import DisplayName from './components/atoms/DisplayName'
import Authorized from './components/atoms/Authorized'
import Seasons from './components/atoms/Seasons'

function App() {
  
  return (
    <>
      <header>
        <h1>01-React Basics</h1>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </header>
      <main>
        <NameForm />
        <DisplayName />
        <Authorized />
        <Seasons />
      </main>
    </>
  )
}

export default App
