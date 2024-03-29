import { useState } from 'react'
import { CrudTable } from '../crudtable/CrudTable'
import { CrudForm } from '../crudform/CrudForm'

const initialDb = [
  {
    id: 1,
    name: 'Seiya',
    constellation: 'Pegaso'
  },
  {
    id: 2,
    name: 'Shiryu',
    constellation: 'Dragón'
  },
  {
    id: 3,
    name: 'Hyoga',
    constellation: 'Cisne'
  },
  {
    id: 4,
    name: 'Shun',
    constellation: 'Andrómeda'
  },
  {
    id: 5,
    name: 'Ikki',
    constellation: 'Fénix'
  }
]

export const CrudApp = () => {
  const [db, setDb] = useState(initialDb)
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
      <h2>CRUD APP</h2>
      <article className="grid-1-2">
        <CrudForm
          createData={createData}
          updateData={updateData}
          dataToEdit={dataToEdit}
          setDataToEdit={setDataToEdit}
        />
        <CrudTable
          data={db}
          setDataToEdit={setDataToEdit}
          deleteData={deleteData}
        />
      </article>
    </section>
  )
}
