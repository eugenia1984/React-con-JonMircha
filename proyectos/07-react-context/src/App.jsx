import './App.css'
// import { MyPage } from './components/MyPage'
import { MyPageContext } from './components/MyPageContext'

function App() {
  return (
    <div>
      <h1>React Context </h1>
      <p>
        <a
          href="https://react.dev/reference/react#context-hooks"
          target="_blank"
          rel="noreferrer"
        >
          documentación
        </a>
      </p>
      <hr />
      <MyPageContext />
      <hr />
      {/* <MyPage /> */}
      <hr />
    </div>
  )
}

export default App
