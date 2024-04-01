import React, { Component } from 'react'

function EstadoAHijo(props) {
  return (
    <>
      <span>{props.contadorHijo}</span>
    </>
  )
}

export default class Estado extends Component {
  constructor(props) {
   super(props);
   this.state = {
    contador: 0
   };
   
   setInterval(() => {
    // No puedo modificar el estado, nunca puedo hacerr
    // this.state.contador +=1
    this.setState({
      contador: this.state.contador + 1
    })
   }, 1000);
  }

  render() {
    return (
      <div>
        <h2>State in class component</h2>
        <p>Father state: {this.state.contador}</p>
        <p>Son state: <EstadoAHijo contadorHijo={this.state.contador}/></p>
        <hr />
      </div>
    )
  }
}
