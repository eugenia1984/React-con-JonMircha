import React, { useState, useEffect } from "react";

export default function RelojHooks() {
  const [hour, setHour] = useState(new Date().toLocaleTimeString());
  const [visible, setVisible] = useState(false);

  //const tictac = (valor) => setVisible(valor);
  useEffect( () => {
    let temporizador;

    if(visible) {
      temporizador = setInterval( () => {
        setHour(new Date().toLocaleTimeString())
      }, 1000)
    } else {
      clearInterval(temporizador)
    }

    return () => {
      console.log("Fase de desmontaje")
      clearInterval(temporizador)
    }
  }, [visible])

  // Componente Clock
  function Clock({ hour }) {
    return <h3>{hour}</h3>;
  }

  return (
    <>
      <h2>Reloj con hooks</h2>
      {visible && <Clock hour={hour} />}
      {/*
      <button onClick={() => tictac(true)}>INICIAR</button>
      <button inClick={() => tictac(false)}>DETENER</button>
       */}
      <button onClick={() => setVisible(true)}>INICIAR</button>
      <button onClick={() => setVisible(false)}>DETENER</button>
    </>
  );
}
