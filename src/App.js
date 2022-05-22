import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import PokemonCard from "./PokemonCard";

export default function App() {
  let [pokemon, setPokemon] = useState(null);
  let [type, setType] = useState(null);
  let [hitPoints, setHitPoints] = useState(null);
  let [icon, setIcon] = useState(null);
  let [loaded, setLoaded] = useState(false);

  let form = (
    <div className="Form">
      <form onSubmit={handleSubmit}>
        <input type="search" name="pokemon" placeholder="find a pokemon" />
        <input type="submit" value="search" />
      </form>
    </div>
  );

  function showPokemon(response) {
    setLoaded(true);
    setType(response.data.types[0].type.name);
    setHitPoints(response.data.stats[0].base_stat);
    let pokemonId = response.data.id;
    setIcon(
      `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`
    );
    console.log(response);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const submitPokemon = event.target.elements.pokemon.value.toLowerCase();
    setPokemon(submitPokemon);
    let url = `https://pokeapi.co/api/v2/pokemon/${submitPokemon}`;
    axios.get(url).then(showPokemon).catch(handleError);
  }

  function handleError() {
    setLoaded(false);
  }

  if (loaded) {
    return (
      <div>
        {form}
        <PokemonCard
          pokemon={pokemon}
          type={type}
          icon={icon}
          hitPoints={hitPoints}
        />
      </div>
    );
  } else {
    return form;
  }
}
