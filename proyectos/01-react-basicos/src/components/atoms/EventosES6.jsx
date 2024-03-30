import { Component } from 'react'

export default class EventosES6 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      contador: 0
    }

    // bindeo
    this.handlerAdd = this.handlerAdd.bind(this)
    this.handlerSubstract = this.handlerSubstract.bind(this)
  }

  handlerAdd(e) {
    console.log('Adding')
    console.log('this: ',this)
    console.log('Event, ', e)
    this.setState({
      contador: this.state.contador + 1
    })
  }

  handlerSubstract() {
    console.log('Substracting')
    console.log(this);
    this.setState({
      contador: this.state.contador - 1,
    })
  }

  render() {
    return (
      <div>
        <h2>Events and biding in class components with ES6</h2>
        <div>
          <button onClick={this.handlerAdd} style={{marginRight: '20px'}}>+</button>
          <button onClick={this.handlerSubstract}>-</button>
        </div>
        <p style={{fontWeight: '800', fontSize: '32px'}}>
          {this.state.contador}
        </p>
        <hr />
      </div>
    )
  }
}
