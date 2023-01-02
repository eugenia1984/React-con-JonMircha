import React from "react";

export default function Pokemon({ avatar, name }) {
  return (
    <figure className="pokemons">
      <img src={avatar} alt={name} />
      <figcaption>{name}</figcaption>
    </figure>
  );
}
