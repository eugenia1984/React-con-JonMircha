import { useState, useEffect } from 'react'

function Pokemon({ avatar, name }) {
  return (
    <figure style={{ display: 'inline-block' }}>
      <img src={avatar} alt={name} />
      <figcaption>{name}</figcaption>
    </figure>
  )
}

const url = 'https://pokeapi.co/api/v2/pokemon/'

export default function AjaxHooks() {
  const [pokemons, setPokemons] = useState([])

  // fetch con .then()
  /*
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        json.results.forEach((el) => {
          fetch(el.url)
            .then((res) => res.json())
            .then((json) => {
              const pokemon = {
                id: json.id,
                name: json.name,
                avatar: json.sprites.front_default
              }
              
              setPokemons((pokemons) => [...pokemons, pokemon])
            })
        })
      })
  }, [])
  */

  // fetch con async-await
  // NUNCA volver asìncrono el useEffect, sino crear la función aaparte y esa es asincrona
  useEffect(() => {
    const getPokemons = async (url) => {
      const res = await fetch(url)
      const json = await res.json()

      json.results.forEach(async (el) => {
        const result = await fetch(el.url)
        const data = await result.json()

        const pokemon = {
          id: data.id,
          name: data.name,
          avatar: data.sprites.front_default
        }
        setPokemons((pokemons) => [...pokemons, pokemon])
      })
    }

    getPokemons()
  }, [])

  return (
    <>
      <h2>Asynchronous Requests with hooks</h2>
      {pokemons.length === 0 ? (
        <h3>Loading...</h3>
      ) : (
        pokemons.map((el) => (
          <Pokemon key={el.id} name={el.name} avatar={el.avatar} />
        ))
      )}
      <hr />
    </>
  )
}
