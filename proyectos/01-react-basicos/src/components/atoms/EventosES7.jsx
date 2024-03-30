import { Component } from 'react'

export default class EventosES7 extends Component {
  // No necesito el constructor y el state es una property de la class
  state = {
    contador: 0
  }

  // Eventos definidos con arrow function
  handlerAdd = (e) => {
    console.log('ES7 - Adding')
    console.log('this: ', this)
    console.log('Event, ', e)
    this.setState({
      contador: this.state.contador + 1
    })
  }

  handlerSubstract = (e) => {
    console.log('ES7 - Substracting')
    console.log(this)
    console.log('Event, ', e)
    this.setState({
      contador: this.state.contador - 1
    })
  }

  render() {
    return (
      <div>
        <h2>Events and property initializers in class components with ES7</h2>
        <div>
          <button onClick={this.handlerAdd} style={{ marginRight: '20px' }}>
            +
          </button>
          <button onClick={this.handlerSubstract}>-</button>
        </div>
        <p style={{ fontWeight: '800', fontSize: '32px' }}>
          {this.state.contador}
        </p>
        <hr />
      </div>
    )
  }
}

// Elemento de REact, componente personalizado
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

// simplificando con arrow function y destructuracion
const Boton = ({ myOnClick }) => (
  <button onClick={myOnClick}>Button Component</button>
)

export class MasSobreEventos extends Component {
  // Passing params from an event
  handleClick = (e, mensaje) => {
    console.log('e.nativeEvent: ', e.nativeEvent)
    console.log('e.nativeEvent.target: ', e.nativeEvent.target)
    console.log('handleClick e.target: ', e.target)
    console.info(mensaje)
  }

  render() {
    return (
      <div>
        <h2>More about Events</h2>
        <button
          onClick={(e) =>
            this.handleClick(e, 'Hi, passing a param from an event!')
          }
        >
          Say hi!
        </button>
        <br />
        <br />
        {/* Evento personalizado */}
        {/* Crear una PROP que se la pasamos al componente y se la asignamos al evento a trabajar de la etiqueta JSX que este internamente en el componente*/}
        {/* <Boton
          onClick={(e) =>
            this.handleClick(e, 'Hi, passing a param from an event inside a Component!')
          }
        /> */}
        <Boton
          myOnClick={(e) =>
            this.handleClick(
              e,
              'Hi, passing a param from an event inside a Component!'
            )
          }
        />
        <hr />
      </div>
    )
  }
}
