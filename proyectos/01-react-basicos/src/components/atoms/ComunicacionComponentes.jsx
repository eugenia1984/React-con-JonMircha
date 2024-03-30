import { Component } from 'react'

export default class Padre extends Component {
  state = {
    counter: 0
  }

  // Para comunicarse del componente hijo hacia el padre
  // Es por medio de funciones, el evento personalizado
  incrementarContador = () => {
    this.setState({
      counter: this.state.counter + 1
    })
  }

  render() {
    return (
      <>
        <h2>Comunication between components</h2>
        <p>Counter: {this.state.counter}</p>
        <Hijo
          incrementarContador={this.incrementarContador}
          mensaje="Messagge from the father to son 1"
        />
        <Hijo
          incrementarContador={this.incrementarContador}
          mensaje="Messagge from the father to son 2"
        />
        <hr />
      </>
    )
  }
}

// Comunicación del componente padre al componente hijo por PROPS
function Hijo(props) {
  return (
    <>
      <h3>{props.mensaje}</h3>
      <button onClick={props.incrementarContador}>+</button>
    </>
  )
}
