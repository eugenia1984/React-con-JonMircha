import { useState } from 'react'

export default function Formularios() {
  // Para tener un INPU CONTROLADO acorde al state
  // Version sencilla guardando cada dato en una variable de estado
  /*
  const [nombre, setNombre] = useState('')
  const [sabor, setSabor] = useState('')
  const [lenguaje, setLenguaje] = useState('')
  const [terminos, setTerminos] = useState(false)

  const handleChangeName = (e) => {
    setNombre(e.target.value)
    console.log('Nombre que se esta ingresando en el input de nombre: ', nombre)
  }

  const handleChangeFlavour = (e) => {
    setSabor(e.target.value)
    console.log('Nombre que se esta ingresando en el input de sabor: ', sabor)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('El formulario se ha enviado')
  }
  */

  // Teniendo todo el estado del form en un objeto
  const [form, setForm] = useState({})

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleChecked = (e) => {
    setForm({
      ...form,
      [e.target.checked]: e.target.checked
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('El formulario se ha enviado')
  }

  return (
    <>
      <h2>Form</h2>
      <form onSubmit={handleSubmit}>
        {/* INPUT TEXT */}
        <label htmlFor="name">Name:</label>
        <br />
        <input
          type="text"
          id="name"
          name="name"
          // defaultValue=""
          value={form.nombre}
          // onChange={handleChangeName}
          onChange={handleChange}
        />
        {/* RADIO BUTTON */}
        <p>Choose your favourite JavaScript flavour:</p>
        <input
          type="radio"
          id="vanilla"
          name="flavour"
          value="vanilla"
          // onChange={handleChangeFlavour}
          onChange={handleChecked}
          defaultChecked
        />
        <label htmlFor="vanilla">Vanilla JavaScript</label>
        <br />
        <input
          type="radio"
          id="react"
          name="flavour"
          value="react"
          // onChange={(e) => setSabor(e.target.value)}
          onChange={handleChange}
        />
        <label htmlFor="react">React</label>
        <br />
        <input
          type="radio"
          id="angular"
          name="flavour"
          value="angular"
          // onChange={(e) => setSabor(e.target.value)}
          onChange={handleChange}
        />
        <label htmlFor="angular">Angular</label>
        <br />
        <input
          type="radio"
          id="vue"
          name="flavour"
          value="vue"
          // onChange={(e) => setSabor(e.target.value)}
          onChange={handleChange}
        />
        <label htmlFor="vue">Vue</label>
        <br />
        <input
          type="radio"
          id="svelte"
          name="flavour"
          value="svelte"
          // onChange={(e) => setSabor(e.target.value)}
          onChange={handleChange}
        />
        <label htmlFor="svelte">Svelte</label>
        <p>Choose your favourite programming language:</p>
        {/* SELECT */}
        <select
          name="language"
          id="language"
          // onChange={(e) => setLenguaje(e.target.value)}
          onChange={handleChange}
          defaultValue=""
        >
          <option value="">- - - Choose - - -</option>
          <option value="js">JavaScript</option>
          <option value="php">PHP</option>
          <option value="py">Python</option>
          <option value="go">Go</option>
          <option value="rb">Ruby</option>
          <option value="java">Java</option>
        </select>
        <br />
        <br />
        <br />
        {/* CHECKBOX */}
        <input
          type="checkbox"
          id="terms"
          name="terms"
          // onChange={(e) => setTerminos(e.target.checked)}
          onChange={handleChecked}
        />
        <label htmlFor="terms">Accept terms and conditions</label>
        <br />
        <br />
        <input
          type="Submit"
          value="Submit"
          style={{
            padding: '12px 24px',
            borderRadius: '7px',
            border: '2px solid white'
          }}
        />
      </form>
      <hr />
    </>
  )
}
