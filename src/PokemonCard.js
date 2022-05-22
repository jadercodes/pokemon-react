import React from "react";

export default function PokemonCard({ pokemon, type, icon }) {
  return (
    <div className="PokemonCard">
      <div>Name: {pokemon}</div>
      <div>Type: {type}</div>
      <img src={icon} alt="pokemon icon" />
    </div>
  );
}
