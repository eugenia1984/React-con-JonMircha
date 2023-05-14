import { useEffect, useState } from 'react'
import { helptHttp } from '../../helper/helphttp'
import { CrudForm } from '../crudform/CrudForm'
import { CrudTable } from '../crudtable/CrudTable'
import { Loader } from '../Loader'
import { Message } from '../Message'

export const CrudApi = () => {
  const [db, setDb] = useState(null)
  const [dataToEdit, setDataToEdit] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  let api = helptHttp()
  let url = 'http://localhost:5000/santos'

  useEffect(() => {
    setLoading(true)
    api.get(url).then((res) => {
      if (!res.err) {
        setDb(res)
        setError(null)
      } else {
        setDb(null)
        setError(res)
      }
    })
    setLoading(false)
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
        {loading && <Loader />}
        {error && <Message />}
        {db && (
          <CrudTable
            data={db}
            setDataToEdit={setDataToEdit}
            deleteData={deleteData}
          />
        )}
      </article>
    </section>
  )
}
