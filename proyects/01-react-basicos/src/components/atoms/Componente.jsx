import React, { Component} from 'react'

// Si fuera un componente funcional, en formato de función declarada
/*
function Componente(props) {
  return <h2>{props.msg}</h2>
}
*/

// Si fuera un componente funcional, en formato de función expresada con arrow function
/*
const Componente = props => <h2>{props.msg}</h2>
*/

// componente de clase
class Componente extends Component {
  render() {
    return <h3>{this.props.msg}</h3>
  }
}

export default Componente