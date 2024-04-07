import { useState, useEffect } from 'react'

// eslint-disable-next-line react/prop-types
function Reloj({ hour }) {
  return <span style={{padding: '0px 12px', fontWeight: 800}}>{hour}</span>
}

export const RelojHooks = () => {
  const [hour, setHour] = useState(new Date().toLocaleTimeString())
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    let temporizador
    if (visible) {
      temporizador = setInterval(() => {
        setHour(new Date().toLocaleTimeString())
      }, 1000)
    } else {
      clearInterval(temporizador)
    }

    return () => {
      console.log('Fase de desmontaje')
      clearInterval(temporizador)
    }
  }, [visible])

  return (
    <>
      <h2>Clock with hooks</h2>
      <button onClick={() => setVisible(true)}>Start</button>
      {visible && <Reloj hour={hour} />}
      <button onClick={() => setVisible(false)}>Stop</button>
      <hr />
    </>
  )
}
