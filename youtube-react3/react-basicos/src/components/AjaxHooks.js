import React, {useState, useEffect } from "react";
import Pokemon from "./Pokemon";

export default function AjaxHooks() {
  const [ pokemons, setPokemons ] = useState([]);

  // primer useEffect con fetch y then
  /*
  useEffect(() => {
    let url = "https://pokeapi.co/api/v2/pokemon/";
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        json.results.forEach((element) => {
          fetch(element.url)
            .then((res) => res.json())
            .then((json) => {
              let pokemon = {
                id: json.id,
                name: json.name,
                avatar: json.sprites.front_default,
              };

              setPokemons((pokemons) => [...pokemons, pokemon]);
            });
        });
      });
  }, [])
  */
 
  // useEffect con fetch y funciones asincronas
  useEffect(() => {
    const getPokemons = async (url) => {
      let res = await fetch(url),
        json = await res.json();
      
      json.results.forEach(async (element) => {
        let res = await fetch(element.url),
          json = await res.json();

        let pokemon = {
          id: json.id,
          name: json.name,
          avatar: json.sprites.front_default,
        };

        setPokemons((pokemons) => [...pokemons, pokemon]);
      });
    }

    getPokemons("https://pokeapi.co/api/v2/pokemon/");

  }, [])

  return (
    <>
      <h2>Peticiones Asíncronas en Hooks</h2>
      {pokemons.length === 0 ? (
        <h3>Cargando...</h3>
      ) : (
        pokemons.map((el) => (
          <Pokemon key={el.id+0} name={el.name} avatar={el.avatar} />
        ))
      )}
    </>
  );
}