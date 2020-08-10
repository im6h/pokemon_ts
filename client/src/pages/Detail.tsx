// import lib, component
import React from "react";
import { observer } from "mobx-react-lite";
import PokemonStore from "../stores/pokemon";
import TypePokemon from "../components/TypePokemon";
import InfoPokemon from "../components/InfoPokemon";
import EvolutionPokemon from "../components/EvolutionPokemon";
import { Pokemon } from "../interface/pokemon";
// import scss
import "../styles/pages/detail.scss";

function Detail() {
  const pokemonStore = React.useContext(PokemonStore);
  const { pokemon } = pokemonStore;
  React.useEffect(() => {
    pokemonStore.fetchPokemon("006");
  }, []);
  return (
    <div className="detail">
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
          #{pokemon.num}
        </p>
      </div>
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
    </div>
  );
}
export default observer(Detail);
