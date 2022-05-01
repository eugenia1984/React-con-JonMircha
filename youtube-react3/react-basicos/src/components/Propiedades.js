import React from "react";
import PropTypes from "prop-types";

export default function Propiedades(props) {
  return(
    <div>
      <h2>Propiedades: {props.porDefecto}</h2>
      <ul>
        <li>{props.cadena}</li>
        <li>{props.numero}</li>
        <li>{props.booleano?"Verdadero":"Falso"}</li>
        <li>{props.arreglo.join(", ")}</li>
        <li>{props.objeto.nombre + "-" + props.objeto.apellido}</li>
        <li>{props.arreglo.map(props.funcion).join(", ")}</li>
        <li>{props.elementoReact}</li>
        <li>{props.componenteReact}</li>
      </ul>
    </div>
  )
}
// Puedo cargar una propiedad por defecto con .defaultProps
Propiedades.defaultProps = {
  porDefecto: "Las props",
};
//cuando me importo prop types puedo definir las caracteristicas de las propiedades, ais la propiedad numero solo recibe Number
Propiedades.propTypes = {
  numero:PropTypes.number.isRequired,
};