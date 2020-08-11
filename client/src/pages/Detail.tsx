// import lib, component
import React from "react";
import { observer } from "mobx-react-lite";
import PokemonStore from "../stores/pokemon";
import InfoPokemon from "../components/InfoPokemon";
import EvolutionPokemon from "../components/EvolutionPokemon";
import { ArrowForwardIos, ArrowBackIos } from "@material-ui/icons";
import { formatNumber } from "../utils/format";
import { Pokemon } from "../interface/pokemon";
import { Link, useLocation } from "react-router-dom";
// import scss
import "../styles/pages/detail.scss";

function Detail() {
  const pokemonStore = React.useContext(PokemonStore);
  const { pokemon, nextPokemon, prevPokemon } = pokemonStore;
  const { pathname } = useLocation();
  React.useEffect(() => {
    pokemonStore.fetchPokemon(pathname.split("/")[2]);
  }, [pathname]);
  const passIdPokemon = async (id: string) => {
    await pokemonStore.fetchPokemon(id);
  };
  return (
    <div className="detail">
      {/* next and prev pokemon */}
      <div className="detail-link">
        <Link
          to={`/detail/${String(formatNumber(Number(prevPokemon.num)))
            .replace(" ", "")
            // .replace(regex, "-")
            .toLowerCase()}`}
          onClick={() => {
            passIdPokemon(String(prevPokemon.num));
          }}
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <ArrowBackIos />
          <p>#{formatNumber(Number(prevPokemon.num))}</p>
          <p>{prevPokemon.name}</p>
        </Link>
        <Link
          to={`/detail/${String(formatNumber(Number(nextPokemon.num)))
            .replace(" ", "")
            // .replace(regex, "-")
            .toLowerCase()}`}
          onClick={() => {
            passIdPokemon(String(nextPokemon.num));
          }}
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <p>{nextPokemon.name}</p>
          <p>#{formatNumber(Number(nextPokemon.num))}</p>
          <ArrowForwardIos />
        </Link>
      </div>
      {/* ---- */}
      {/* block title */}
      <div className="detail-name">
        <p
          style={{
            fontSize: "36px",
            fontWeight: "bold",
          }}
        >
          {pokemon.name}
        </p>
        <p
          style={{
            fontSize: "34px",
            color: "#aaaaaa",
            fontWeight: "bold",
          }}
        >
          #{formatNumber(Number(pokemon.num))}
        </p>
      </div>
      {/* ---- */}

      {/* block info */}
      <div className="detail-info">
        <InfoPokemon
          name={pokemon.name}
          img={pokemon.img}
          weaknesses={pokemon.weaknesses}
          types={pokemon.types}
          height={pokemon.height}
          weight={pokemon.weight}
          info={pokemon.info}
        />
      </div>
      {/* ---- */}

      {/* block evolution */}
      <div className="detail-evolution">
        <h2>Evolution</h2>
        <div className="detail-evolution__evo">
          {pokemon.evolution?.map((e: Pokemon) => {
            return (
              <div key={e.num}>
                <EvolutionPokemon
                  name={e.name}
                  num={e.num}
                  img={e.img}
                  types={e.types}
                />
              </div>
            );
          })}
        </div>
      </div>
      {/* ---- */}
    </div>
  );
}
export default observer(Detail);
