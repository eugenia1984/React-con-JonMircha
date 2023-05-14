import { useState } from 'react'

export const CrudForm = () => {
  const [form, setForm] = useState({
    name: '',
    constellation: '',
    id: null
  })

  const handleChange = (e) => {}
  const handleSubmit = (e) => {}
  const handleReset = (e) => {}

  return (
    <div>
      <h3>Add</h3>
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
        <input type="submit" value="Send" />
        <input type="reset" value="Clear" onClick={handleReset} />
      </form>
    </div>
  )
}
