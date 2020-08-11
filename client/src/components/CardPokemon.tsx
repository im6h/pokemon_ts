// import lib, components
import React from "react";
import TypePokemon from "../components/TypePokemon";
import { Pokemon } from "../interface/pokemon";
import { formatNumber } from "../utils/format";
// import style
import "../styles/components/cardPokemon.scss";

/**
 * function CardPokemon render view card pokemon.
 * @param Props
 */
function CardPokemon({ num, name, types, img }: Pokemon) {
  return (
    <div className="card">
      {/* image to display pokemon */}
      <div className="card__imagePokemon">
        <img src={img} alt={name} loading="lazy" />
      </div>
      {/* ----  */}

      {/* info pokemon */}
      <div className="card__infoPokemon">
        <p className="card__infoPokemon-num">#{formatNumber(Number(num))}</p>
        <p className="card__infoPokemon-name">{name}</p>
      </div>
      {/* ---- */}

      {/* type pokemon */}
      <div className="card__typePokemon">
        {types?.map((e: string) => {
          return <TypePokemon type={e} key={e} />;
        })}
      </div>
      {/* ---- */}
    </div>
  );
}

export default CardPokemon;
