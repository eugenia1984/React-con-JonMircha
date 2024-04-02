/* eslint-disable react/prop-types */
import { Component } from "react";

export default class Padre extends Component {
  state = {
    counter: 0,
  };
  // Para comunicarse del componente hijo hacia el padre
  // Es por medio de funciones, el evento personalizado
  incrementarContador = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };

  render() {
    return (
      <>
        <h2>Communication between components</h2>
        <p>Counter of the father component : {this.state.counter}</p>
        <Hijo
          incrementarContador={this.incrementarContador}
          message="Add 1 to the counter - from son 1 - "
        />
        <Hijo
          incrementarContador={this.incrementarContador}
          message="Add 1 to the counter - from son 2 - "
        />
        <hr />
      </>
    );
  }
}

// Comunicación del componente padre al componente hijo por PROPS
function Hijo(props) {
  return (
    <h3>
      {props.message} <button onClick={props.incrementarContador}>+</button>
    </h3>
  );
}
