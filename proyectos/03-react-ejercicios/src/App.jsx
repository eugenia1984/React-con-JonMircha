import { CrudApi } from './components/crudapi/CrudApi'
import { CrudApp } from './components/crudapp/CrudApp'
import ContactForm from './components/form/ContactForm'
import Modals from './components/modals/Modals'
import SelectsAnidados from './components/selects/SelectsAnidados'
import { SongSearch } from './components/song/SongSearch'

function App() {
  return (
    <>
      <h1>React exercises</h1>
      <Modals />
      <hr />
      <ContactForm />
      <hr />
      <SelectsAnidados />
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
