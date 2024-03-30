import React, { useState, useCallback } from 'react'
import CounterSon from './CounterSon'

export const Counter = () => {
  const [counter, setCounter] = useState(0)
  const [input, setInput] = useState('')

  // const add = () => setCounter(counter + 1)
  const add = useCallback(() => setCounter(counter + 1), [counter])

  // const subtract = () => setCounter(counter - 1)
  const subtract = useCallback(() => setCounter(counter - 1), [counter])
  const handleInput = (e) => setInput(e.target.value)

  const styleSpan = {
    padding: '8px 12px',
    background: 'white',
    color: 'black',
    borderRadius: '7px',
    margin: '0px 18px',
    fontWeight: '800'
  }

  return (
    <div>
      <h2>Couter</h2>
      <button onClick={subtract}>-</button>
      <span style={styleSpan}>{counter} </span>
      <button onClick={add}>+</button>
      <br />
      <br />
      <input type="text" onChange={handleInput} value={input} />
      <CounterSon counter={counter} add={add} subtract={subtract} />
    </div>
  )
}
