import React from 'react'

export const MemoTheory = () => {
  const usalo = [
    'Tenemos muchos elementos renderizados en una lista.',
    'Llamamos datos de APIs.',
    'Un componente se vuelve muy pesado.',
    'Salen alertas de rendimiento en la consola.'
  ]

  return (
    <div>
      <h2>
        <a
          href="https://react.dev/reference/react/memo"
          target="_blank"
          rel="noreferrer"
        >
          memo
        </a>
      </h2>
      <div style={{ textAlign: 'left' }}>
        <ul>
          <li>Se encarga de memorizar un componente,</li>
          <li>
            Lo vuelve a memorizar al momento de que sus <b>props</b> cambian.
          </li>
          <li>Evita re-renderizados.</li>
          <li>
            Hay que evitarlo en la medida de lo posible, pues podría ser más
            costosa la tarea de memorización que el re-renderizado del
            componente.
          </li>
          <li>
            Úsalo, cuando:
            <ul>
              {usalo.map((el, index) => (
                <li key={`${index}+a`}>{el}</li>
              ))}
            </ul>
          </li>
        </ul>
      </div>
    </div>
  )
}
