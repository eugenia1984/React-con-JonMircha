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
