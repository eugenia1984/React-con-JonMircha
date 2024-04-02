import { Component } from "react";

export default class EventosES7 extends Component {
  // No need to use constructor and the STATE it's a property of the class
  state = {
    contador: 0,
  };
  // Events with arrow function, no binding needed, inherit the THIS of the class
  handlerAdd = (e) => {
    console.log("ES7 - Adding - this: ", this);
    console.log("Event: ", e);
    this.setState({
      contador: this.state.contador + 1,
    });
  };

  handlerSubtract = (e) => {
    console.log("ES7 - Subtracting - this: ", this);
    console.log("Event: ", e);
    this.setState({
      contador: this.state.contador - 1,
    });
  };

  render() {
    return (
      <div>
        <h2>Events and property initializers in class components with ES7</h2>
        <div>
          <button onClick={this.handlerAdd} style={{ marginRight: "20px" }}>
            +
          </button>
          <span style={{ fontWeight: "800", fontSize: "32px", padding: "0px 12px" }}>
            {this.state.contador}
          </span>
          <button onClick={this.handlerSubtract}>-</button>
        </div>
        <hr />
      </div>
    );
  }
}

// Elemento de React, componente personalizado
/* 
function Boton(props) {
  return <button onClick={props.myOnClick}>Button Component</button>
} 
*/

// simplificando con arrow function
/*
const Boton = (props) => (
  <button onClick={props.myOnClick}>Button Component</button>
)
*/

// simplificando con arrow function, return implícito y destructuración
// eslint-disable-next-line react/prop-types
const Boton = ({ myOnClick }) => (
  <button onClick={myOnClick}>Button Component</button>
);

export class MasSobreEventos extends Component {
  // Passing params from an event
  // Must pass the Event as a param in the arrow function at the onClick 
  handleClick = (e, message) => {
    console.log("e.nativeEvent: ", e.nativeEvent);
    console.log("e.nativeEvent.target: ", e.nativeEvent.target);
    console.log("handleClick e.target: ", e.target);
    console.info('message: ',message);
  };

  render() {
    return (
      <div>
        <h2>More about Events</h2>
        <button
          onClick={(e) =>
            this.handleClick(e, "Hi, passing a param from an event!")
          }
        >
          Say hi!
        </button>
        <br />
        <br />
        {/* Evento personalizado */}
        {/* Crear una PROP que se la pasamos al componente y se la asignamos al evento a trabajar de la etiqueta JSX que este internamente en el componente*/}
        <Boton
          myOnClick={(e) =>
            this.handleClick(
              e,
              "Hi, passing a param from an event inside a Component!"
            )
          }
        />
        <hr />
      </div>
    );
  }
}
