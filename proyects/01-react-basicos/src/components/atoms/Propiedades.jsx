import React from 'react'
import PropTypes from 'prop-types'

export default function Propiedades(props) {
  return (
    <div>
      <h2>Props</h2>
      <p>Prop by default: {props.porDefecto}</p>
      <ul>
        <li>String: {props.cadena}</li>
        <li>Number: {props.numero}</li>
        <li>Boolean: {props.booleano ? 'true' : 'false'}</li>
        <li>Array: {props.arreglo.join(', ')}</li>
        <li>
          Object: {props.objeto.nombre} {props.objeto.correo}
        </li>
        <li>Function: {props.arreglo.map(props.funcion).join(', ')}</li>
        <li>React element: {props.elementoReact}</li>
        <li>React component: {props.componenteReact}</li>
      </ul>
      <hr />
    </div>
  )
}

Propiedades.defaultProps = {
  porDefecto: 'Las props'
}

Propiedades.propTypes = {
  cadena: PropTypes.string.isRequired,
  numero: PropTypes.number.isRequired,
  booleano: PropTypes.bool
}
