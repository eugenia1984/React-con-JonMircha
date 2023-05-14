import { useEffect, useState } from 'react'
import { helptHttp } from '../../helper/helphttp'
import { CrudForm } from '../crudform/CrudForm'
import { CrudTable } from '../crudtable/CrudTable'

export const CrudApi = () => {
  const [db, setDb] = useState([])
  const [dataToEdit, setDataToEdit] = useState(null)

  let api = helptHttp()
  let url = 'http://localhost:5000/santos'
  useEffect(() => {
    api.get(url).then((res) => {
      // console.log(res)
      if(!res.err) {
        setDb(res)
      } else {
        setDb(null)
      }
    })
  }, [])

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
