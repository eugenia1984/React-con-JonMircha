import { CrudApi } from './components/crudapi/CrudApi'
import { CrudApp } from './components/crudapp/CrudApp'
import { SongSearch } from './components/song/SongSearch'

function App() {
  return (
    <>
      <h1>React exercises</h1>
      <hr />
      <SongSearch />
      <hr />
      <CrudApi />
      <hr />
      <CrudApp />
      <hr />
    </>
  )
}

export default App
