import React, { useState } from "react";

export default function ContadorHooks(props) {
  const [contador, setContador] = useState(0);

  const sumar = () => setContador(contador + 1);

  const restar = () => setContador(contador - 1);

  return (
    <>
      <h2>Hooks - useState</h2>
      <nav>
        <button onClick={sumar} className="btn-sumando">
          +
        </button>
        <button onClick={restar} className="btn-restando">
          -
        </button>
      </nav>
      <p>
        {props.titulo} de clicks: <strong>{contador}</strong>{" "}
      </p>
    </>
  );
}

ContadorHooks.defaultProps = {
  titulo: "Contador",
};
