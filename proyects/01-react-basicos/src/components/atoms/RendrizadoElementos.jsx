import React, { Component } from 'react'
import data from '../../helpers/data.json'

function ElementoLista(props) {
  return (
    <li>
      <a href={props.el.web} alt={props.el.name} target="_blank" rel="noreferrer">{props.el.name}</a>
    </li>
  )
}

export default class RenderizadoElementos extends Component {
  constructor(props) {
    super(props)
    this.state = {
      seassons: ['Spring', 'Summer', 'Autumn', 'Winter']
    }
  }

  render() {
    console.log(data)
    return (
      <div>
        <h2>Elements rendering</h2>
        <h3>Seasons (from an array):</h3>
        <ol>
          {this.state.seassons.map((el) => (
            <li key={el}>{el}</li>
          ))}
        </ol>
        <h3>Front End Frameworks - JavaScript (from a JSON):</h3>
        <ul>
          {data.frameworks.map((el) => (
            <ElementoLista key={el.id} el={el} />
          ))}
        </ul>
        <hr />
      </div>
    )
  }
}
