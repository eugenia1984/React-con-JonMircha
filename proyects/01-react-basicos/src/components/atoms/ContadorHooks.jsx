import { useState } from 'react'

export default function ContadorHooks({titulo}) {
  const [contador, setContador ] = useState(0)

  const sumar = () => setContador(contador + 1)
  const restar = () => setContador(contador - 1)

  return (
    <>
      <h2>Hooks - useState</h2>
      <div>
        <button onClick={sumar} >+</button>
        <button onClick={restar}>-</button>
      </div>
      <p>Counter of {titulo}: <span style={{fontWeight: '800', marginLeft: '10px'}}>{contador}</span></p>
      <hr />
    </>
  )
}

ContadorHooks.defaultProps = {
  titulo: 'Clicks'
}
