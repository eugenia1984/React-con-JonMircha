import React from 'react'

export const UseMemoTheory = () => {
  return (
    <div>
      <h2>
        <a
          href="https://react.dev/reference/react/useMemo"
          target="_blank"
          rel="noreferrer"
        >
          useMemo
        </a>
      </h2>
      <ul style={{textAlign: 'left'}}>
        <li>
          Memoriza un valor calculado, es decir, el resultado de una función.
        </li>
        <li>Genera propiedades computadas.</li>
        <li>Úsalo en procesos pesados.</li>
      </ul>
    </div>
  )
}
