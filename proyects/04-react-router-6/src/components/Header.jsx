import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'

const Header = () => {
  return (
    <header>
      <h1>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>{' '}
        React Router v.6{' '}
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
      </h1>
    </header>
  )
}

export default Header
