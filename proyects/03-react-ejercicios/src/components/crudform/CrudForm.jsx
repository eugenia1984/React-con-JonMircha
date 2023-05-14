import { useEffect, useState } from 'react'
import './CrudForm.css'

const initialForm = {
  name: '',
  constellation: '',
  id: null
}

export const CrudForm = ({
  createData,
  updateData,
  dataToEdit,
  setDataToEdit
}) => {
  const [form, setForm] = useState(initialForm)

  useEffect(() => {
    if(dataToEdit) {
      setForm(dataToEdit)
    } else {
      setForm(initialForm)
    }
  }, [dataToEdit])

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault

    if (!form.name || !form.constellation) {
      alert('Incomplete data')
      return
    }

    if (form.id === null) {
      createData(form)
      alert('Data created')
    } else {
      updateData(form)
      alert('Data updated')
    }

    handleReset()
  }

  const handleReset = (e) => {
    setForm(initialForm)
    setDataToEdit(null)
  }

  return (
    <div>
      <h3>{dataToEdit? 'Edit' : 'Add'} a register</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
          value={form.name}
        />
        <input
          type="text"
          name="constellation"
          placeholder="Constellation"
          onChange={handleChange}
          value={form.constellation}
        />
        <input type="submit" value="Send" id="send"/>
        <input type="reset" value="Clear" onClick={handleReset} id="clear" />
      </form>
    </div>
  )
}
