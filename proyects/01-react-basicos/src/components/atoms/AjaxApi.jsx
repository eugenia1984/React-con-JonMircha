import { Component } from 'react'

function Pokemon({ avatar, name }) {
  return (
    <figure style={{display: 'inline-block'}}>
      <img src={avatar} alt={name} />
      <figcaption>{name}</figcaption>
    </figure>
  )
}

export default class AjaxApis extends Component {
  state = {
    pokemons: []
  }

  componentDidMount() {
    const url = 'https://pokeapi.co/api/v2/pokemon/'
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        json.results.forEach((el) => {
          fetch(el.url)
          // Por cada pokemon un fetch para obtener la imagen
            .then((res) => res.json())
            .then((json) => {
              const pokemon = {
                id: json.id,
                name: json.name,
                avatar: json.sprites.front_default
              }

              const pokemons = [...this.state.pokemons, pokemon]

              this.setState({ pokemons })
            })
        })
      })
  }

  render() {
    return (
      <>
        <h2>Asynchronous Requests in Class Components</h2>
        {this.state.pokemons.length === 0 ? (
          <h3>Loading...</h3>
        ) : (
          this.state.pokemons.map((el) => (
            <Pokemon key={el.id} name={el.name} avatar={el.avatar} />
          ))
        )}
        <hr />
      </>
    )
  }
}
