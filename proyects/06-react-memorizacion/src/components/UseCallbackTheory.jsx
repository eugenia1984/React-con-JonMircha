import React from 'react'

export const UseCallbackTheory = () => {
  const items = [
    'Memoriza una función, para no volverla a definir en cada render.',
    'Úsalo siempre que se pase una función como prop a un componente memorizado.',
    'Úsalo siempre que se pase una función como parámetro de un efecto.'
  ]

  return (
    <div>
      <h2>
        <a
          href="https://react.dev/reference/react/useCallback"
          target="_blank"
          rel="noreferrer"
        >
          useCallback
        </a>
      </h2>
      <ul style={{textAlign: 'left'}}>
        {items.map((item, index) => (
          <li key={`${index}-item`}>{item}</li>
        ))}
      </ul>
    </div>
  )
}
