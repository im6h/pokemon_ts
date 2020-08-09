import React from "react";
import CardPokemon from "./CardPokemon";
import { Pokemon } from "../interface/pokemon";
import "../styles/components/evolutionPokemon.scss";

function EvoluitonPokemon({ name, num, img, types }: Pokemon) {
  return (
    <div className="evolution">
      {<CardPokemon name={name} num={num} img={img} types={types} />}
    </div>
  );
}

export default EvoluitonPokemon;
