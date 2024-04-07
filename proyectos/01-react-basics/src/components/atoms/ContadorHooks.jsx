import { useState } from "react";
import PropTypes from "prop-types";

export const ContadorHooks = ({ titulo }) => {
  const [contador, setContador] = useState(0);

  const sumar = () => setContador(contador + 1);
  const restar = () => setContador(contador - 1);

  return (
    <>
      <h2>Hooks - useState</h2>
      <p>
        Counter of {titulo}:{" "}
        <span style={{ fontWeight: "800", marginLeft: "10px" }}>
          {contador}
        </span>
      </p>
      <div>
        <button onClick={restar}>-</button>
        <button onClick={sumar}>+</button>
      </div>
      <hr />
    </>
  );
};

export default ContadorHooks;

ContadorHooks.defaultProps = {
  titulo: "Clicks",
};

ContadorHooks.propTypes  = {
  titulo: PropTypes.string,
}