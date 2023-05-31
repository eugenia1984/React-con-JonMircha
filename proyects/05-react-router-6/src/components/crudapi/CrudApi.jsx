import { HashRouter, Route, Routes } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { helptHttp } from '../../helper/helphttp'
import { CrudForm } from '../crudform/CrudForm'
import { CrudTable } from '../crudtable/CrudTable'
import { Loader } from '../Loader'
import { Message } from '../Message'
import { Header } from './Header'

export const CrudApi = () => {
  const [db, setDb] = useState(null)
  const [dataToEdit, setDataToEdit] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  let api = helptHttp()
  let url = 'http://localhost:5000/santos'

  useEffect(() => {
    setLoading(true)
    helptHttp()
      .get(url)
      .then((res) => {
        if (!res.err) {
          setDb(res)
          setError(null)
        } else {
          setDb(null)
          setError(res)
        }
      })
    setLoading(false)
  }, [url])

  const createData = (data) => {
    data.id = Date.now()

    let options = {
      body: data,
      headers: { 'content-type': 'application/json' }
    }

    api.post(url, options).then((res) => {
      console.log(res)
      if (!res.err) {
        setDb([...db, res])
      } else {
        setError(res)
      }
    })
  }

  const updateData = (data) => {
    let endpoint = `${url}/${data.id}`

    let options = {
      body: data,
      headers: { 'content-type': 'application/json' }
    }

    api.put(endpoint, options).then((res) => {
      console.log(res)
      if (!res.err) {
        let newData = db.map((el) => (el.id === data.id ? data : el))
        setDb(newData)
      } else {
        setError(res)
      }
    })
  }

  const deleteData = (id) => {
    let isDelete = window.confirm(
      `Are you sure you want to delete the register with id: ${id}?`
    )
    if (isDelete) {
      let endpoint = `${url}/${id}`
      let options = {
        headers: { 'content-type': 'application/json' }
      }

      api.del(endpoint, options).then((res) => {
        if (!res.err) {
          let newData = db.filter((el) => el.id !== id)
          setDb(newData)
        } else {
          setError(res)
        }
      })
    } else {
      return
    }
  }

  return (
    <section className="main">
      <HashRouter >
        <Header />
        <Routes>
          <Route path="/saints" element={<h2>Home y Delete</h2>} />
          <Route path="/saints/add" element={<h2>Add</h2>} />
          <Route path="/saints/edit/:id" element={<h2>Edit</h2>} />
          <Route path="*" element={<h2>Ups...</h2>} />
        </Routes>
      </HashRouter>

      <article className="grid-1-2">
        <CrudForm
          createData={createData}
          updateData={updateData}
          dataToEdit={dataToEdit}
          setDataToEdit={setDataToEdit}
        />
        {loading && <Loader />}
        {error && (
          <Message
            msg={`Error: ${error.status}: ${error.statusText}`}
            bgColor="#dc3545"
          />
        )}
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
