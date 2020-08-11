import React from "react";
import TypePokemon from "./TypePokemon";
import { Pokemon } from "../interface/pokemon";
import "../styles/components/infoPokemon.scss";
function InfoPokemon({
  img,
  name,
  info,
  height,
  weight,
  types,
  weaknesses,
}: Pokemon) {
  return (
    <div className="info">
      {/* img block */}
      <div className="info__img">
        <img src={img} alt={name} />
      </div>
      {/* ---- */}

      {/* info block */}
      <div className="info__info">
        {/* info block */}
        <div
          style={{
            border: "1px soild tranparent",
            backgroundColor: "#2FB2FC",
            borderRadius: "4px",
            padding: "10px",
            color: "white",
          }}
        >
          {/* --- */}

          {/* height, weight */}
          <div className="info__height">
            <h3>Height:</h3>
            <p>{height}</p>
          </div>
          <div className="info__weight">
            <h3>Weight:</h3>
            <p>{weight}</p>
          </div>
          {/* --- */}

          {/* info */}
          <p
            style={{
              margin: "0px",
            }}
          >
            {info}
          </p>
          {/* ----- */}
        </div>
        {/* ---- */}

        {/* types block */}
        <div className="info__types">
          <h3>Types</h3>
          {types?.map((type: string) => {
            return <TypePokemon key={type} type={type} />;
          })}
        </div>
        {/* ---- */}

        {/* weaknesses block */}
        <div className="info__weaknesses">
          <h3>Weaknesses</h3>
          {weaknesses?.map((type: string) => {
            return <TypePokemon key={type} type={type} />;
          })}
        </div>
        {/* ---- */}
      </div>
      {/* ---- */}
    </div>
  );
}

export default InfoPokemon;
