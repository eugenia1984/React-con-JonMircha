import { useState } from 'react'
import { CrudApiForm } from './CrudApiForm'
import { CrudApiTable } from './CrudApiTable'

export const CrudApi = () => {
  const [db, setDb] = useState([])
  const [dataToEdit, setDataToEdit] = useState(null)

  const createData = (data) => {
    data.id = Date.now()
    setDb([...db, data])
  }

  const updateData = (data) => {
    let newData = db.map((el) => (el.id === data.id ? data : el))
    setDb(newData)
  }

  const deleteData = (id) => {
    let isDelete = window.confirm(
      `Are you sure you want to delete the register with id: ${id}?`
    )
    if (isDelete) {
      let newData = db.filter((el) => el.id !== id)
      setDb(newData)
    } else {
      return
    }
  }

  return (
    <section className="main">
      <h2>CRUD API</h2>
      <article className="grid-1-2">
        <CrudApiForm
          createData={createData}
          updateData={updateData}
          dataToEdit={dataToEdit}
          setDataToEdit={setDataToEdit}
        />
        <CrudApiTable
          data={db}
          setDataToEdit={setDataToEdit}
          deleteData={deleteData}
        />
      </article>
    </section>
  )
}
