import './App.css'
import { CrudApi } from './components/crudapi/CrudApi'
// import { SongSearch } from './components/song/SongSearch'
// import { BasicConcepts } from './components/BasicConcepts'

function App() {
  return (
    <div>
      <h1>React Router DOM - version 6</h1>
      {/* <a
        href="https://reactrouter.com/en/main"
        target="_blank"
        rel="noreferrer"
      >
        Documentation
      </a> */}
      <hr />
      <CrudApi />
      <hr />
      {/* <SongSearch /> */}
      {/* <hr /> */}
      {/* <BasicConcepts /> */}
    </div>
  )
}

export default App
