import React, { memo, useMemo } from 'react'

const CounterSon = ({ counter, add, subtract }) => {
  // let superNumero = 0
  // for(let i= 0; i < 100000; i++) {
  //   superNumero++
  // }
  const superNumero = useMemo(() => {
    let numero = 0
    for(let i= 0; i < 1000000000; i++) {
      numero++
    }
    return numero
  }, [])

  console.timeLog('Counter son rendering...')

  const style = {
    border: '1px solid red',
    padding: '1rem 2rem',
    margin: '1rem 0rem',
    borderRadius: '7px'
  }

  const styleSpan = {
    padding: '8px 12px',
    background: 'white',
    color: 'black',
    borderRadius: '7px',
    margin: '0px 18px',
    fontWeight: '800'
  }

  return (
    <div style={style}>
      <h2>Counter son</h2>
      <button onClick={subtract}>-</button>
      <span style={styleSpan}>{counter} </span>
      <button onClick={add}>+</button>
      <br />
      <hr />
      <h3>{superNumero}</h3>
    </div>
  )
}

export default memo(CounterSon)
