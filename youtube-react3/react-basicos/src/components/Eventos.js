import React, { Component } from "react";

export class EventosES6 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contador:0,
    };

    this.sumar = this.sumar.bind(this);
    this.restar = this.restar.bind(this);
  }

  sumar(e) {
    console.log("Sumando 1");
    //console.log(this);
    this.setState({
      contador:this.state.contador + 1,
    });
  }

  restar(e) {
    console.log("Restando 1");
    //console.log(this);
    this.setState({
      contador:this.state.contador - 1,
    });
  }

  render() {
    return(
      <div>
        <h2>Eventos en Componentes de Clase ES6</h2>
        <nav>
          <button onClick={this.sumar} className="btn-add">+</button>
          {this.state.contador}
          <button onClick={this.restar} className="btn-substrat">-</button>
        </nav>
      </div>
    );
  }
}

// Properties Initializer
export class EventosES7 extends Component {
  state = {
    contador: 0,
  };
  sumar = (e) => {
    this.setState({
      contador:this.state.contador + 1,
    });
  }

  restar = (e) => {
    this.setState({
      contador:this.state.contador - 1,
    });
  }

  render() {
    return(
      <div>
        <h2>Eventos en Componentes de Clase ES7</h2>
        <nav>
          <button onClick={this.sumar} className="btn-add">+</button>
          {this.state.contador}
          <button onClick={this.restar} className="btn-substrat">-</button>
        </nav>
      </div>
    );
  }
}


/* function Boton(props) {
  return <button onClick={props.myOnClick}>Botón hecho componente</button>;
} */

/* const Boton = (props) => (
  <button onClick={props.myOnClick}>Botón hecho componente</button>
); */

const Boton = ({ myOnClick }) => (
  <button onClick={myOnClick}>Botón hecho componente</button>
);

export class MasSobreEventos extends Component {
  handleClick = (e, mensaje) => {
    console.log("** Evento Sintético de Reaact (e)**");
    console.log(e);
    console.log("** e.target **");
    console.log(e.target);
    console.log("** Evento Nativo de JS (e.nativeEvent) **");
    console.log(e.nativeEvent);
    console.log("** e.nativeEvent.target **");
    console.log(e.nativeEvent.target);
    console.log(mensaje);
  };

  render() {
    return (
      <div className="eventos">
        <h2>Más Sobre Eventos</h2>
        <button
          onClick={(e) =>
            this.handleClick(e, "Hola pasando parámetro desde un evento")
          }
        >
          Saludar
        </button>
        {/* Evento Personalizado */}
        {/* <Boton
          onClick={(e) =>
            this.handleClick(e, "Hola pasando parámetro desde un evento")
          }
        /> */}
        <Boton
          myOnClick={(e) =>
            this.handleClick(e, "Hola pasando parámetro desde un evento")
          }
        />
      </div>
    );
  }
}