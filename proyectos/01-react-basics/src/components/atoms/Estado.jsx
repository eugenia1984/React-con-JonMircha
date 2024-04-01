import { Component } from "react";
import PropTypes from "prop-types";

function EstadoAHijo(props) {
  return (
    <>
      <span>{props.contadorHijo}</span>
    </>
  );
}

EstadoAHijo.propTypes = {
  contadorHijo: PropTypes.number
}

export default class Estado extends Component {
  constructor(props) {
    super(props);
    // objeto del estado
    this.state = {
      contador: 0,
    };

    setInterval(() => {
      // No puedo modificar el estado, nunca puedo hacer: this.state.contador +=1
      this.setState({
        contador: this.state.contador + 1,
      });
    }, 1000);
  }

  render() {
    return (
      <div>
        <h2>State in class component</h2>
        <p>Father state: {this.state.contador}</p>
        <p>
          Son state: <EstadoAHijo contadorHijo={this.state.contador} />
        </p>
        <hr />
      </div>
    );
  }
}
