import React from "react";
import TypePokemon from "./TypePokemon";
import { Pokemon } from "../interface/pokemon";
import "../styles/components/evolutionPokemon.scss";

function EvoluitonPokemon({ name, num, img, types }: Pokemon) {
  return (
    <div className="evolution">
      {/* title info evolution pokemon  */}
      <div className="evolution__body">
        {/* img evolution pokemon */}
        <div className="evolution__img">
          <img src={img} alt={name} />
        </div>
        {/* ---- */}

        {/* num evolution pokemon */}
        <div className="evolution__num">
          <p>#{num}</p>
        </div>
        {/* ---- */}

        {/* name evolution pokemon */}
        <div className="evolution__name">
          <p>{name}</p>
        </div>
        {/* ---- */}

        {/* type evolution pokemon use type component */}
        <div className="evolution__types">
          {types?.map((type: string) => {
            return <TypePokemon type={type} />;
          })}
        </div>
        {/* ---- */}
      </div>
      {/* ---- */}
    </div>
  );
}

export default EvoluitonPokemon;
