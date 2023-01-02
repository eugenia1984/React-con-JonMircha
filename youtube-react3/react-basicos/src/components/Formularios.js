import React, { useState } from "react";

export default function Formularios() {
  /*
  const [nombre, setNombre] = useState("");
  const [sabor, setSabor] = useState("");
  const [lenguaje, setLenguaje] = useState("");
  const [terminos, setTerminos] = useState(false);
  */
  const [form, setForm] = useState({});

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleChecked = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.cheked,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("El formulario se ha enviado");
  };
  return (
    <>
      <h2>Formularios</h2>
      {/*
      <form onSubmit={handleSubmit}>
        <label htmlFor="nombe">Nombre:</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <p>Elije tu sabor JS favorito</p>
        <input
          type="radio"
          id="vanilla"
          name="sabor"
          value="vanilla"
          onChange={(e) => setSabor(e.target.value)}
          defaultChecked
        />
        <label htmlFor="vanilla">VANILLA</label>
        <input
          type="radio"
          id="react"
          name="sabor"
          value="react"
          onChange={(e) => setSabor(e.target.value)}
        />
        <label htmlFor="react">REACT</label>
        <input
          type="radio"
          id="angular"
          name="sabor"
          value="angular"
          onChange={(e) => setSabor(e.target.value)}
        />
        <label htmlFor="angular">ANGULAR</label>
        <input
          type="radio"
          id="vue"
          name="sabor"
          value="vue"
          onChange={(e) => setSabor(e.target.value)}
        />
        <label htmlFor="vue">VUE</label>
        <input
          type="radio"
          id="svelte"
          name="sabor"
          value="svelte"
          onChange={(e) => setSabor(e.target.value)}
        />
        <label
          htmlFor="svelte"
          onChange={(e) => setLenguaje(e.target.value)}
          defaultValue=""
        >
          SVELTE
        </label>
        <p>Elije tu lenguaje de programación favorito</p>
        <select name="lenguaje">
          <option value="">---</option>
          <option value="js">JavaScript</option>
          <option value="php">PHP</option>
          <option value="py">Python</option>
          <option value="go">GO</option>
          <option value="rb">Ruby</option>
        </select>
        <br />
        <input
          type="checkbox"
          id="terminos"
          name="terminos"
          onChange={(e) => setTerminos(e.target.checked)}
        />
        <label htmlFor="terminos">Acepto términos y condiciones</label>
      </form>
      */}
      <form onSubmit={handleSubmit}>
        <label htmlFor="nombe">Nombre:</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={form.nombre}
          onChange={handleChange}
        />
        <p>Elije tu sabor JS favorito</p>
        <input
          type="radio"
          id="vanilla"
          name="sabor"
          value="vanilla"
          onChange={handleChange}
          defaultChecked
        />
        <label htmlFor="vanilla">VANILLA</label>
        <input
          type="radio"
          id="react"
          name="sabor"
          value="react"
          onChange={handleChange}
        />
        <label htmlFor="react">REACT</label>
        <input
          type="radio"
          id="angular"
          name="sabor"
          value="angular"
          onChange={handleChange}
        />
        <label htmlFor="angular">ANGULAR</label>
        <input
          type="radio"
          id="vue"
          name="sabor"
          value="vue"
          onChange={handleChange}
        />
        <label htmlFor="vue">VUE</label>
        <input
          type="radio"
          id="svelte"
          name="sabor"
          value="svelte"
          onChange={handleChange}
        />
        <label
          htmlFor="svelte"
          onChange={handleChange}
          defaultValue=""
        >
          SVELTE
        </label>
        <p>Elije tu lenguaje de programación favorito</p>
        <select name="lenguaje">
          <option value="">---</option>
          <option value="js">JavaScript</option>
          <option value="php">PHP</option>
          <option value="py">Python</option>
          <option value="go">GO</option>
          <option value="rb">Ruby</option>
        </select>
        <br />
        <input
          type="checkbox"
          id="terminos"
          name="terminos"
          onChange={handleChecked}
        />
        <label htmlFor="terminos">Acepto términos y condiciones</label>
        
      </form>
    </>
  );
}
