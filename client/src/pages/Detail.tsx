// import lib, component
import React from "react";
import { observer } from "mobx-react-lite";
import PokemonStore from "../stores/pokemon";
import TypePokemon from "../components/TypePokemon";
import EvolutionPokemon from "../components/EvolutionPokemon";
import { Pokemon } from "../interface/pokemon";
// import scss
import "../styles/pages/detail.scss";

function Detail() {
  const pokemonStore = React.useContext(PokemonStore);
  const { pokemon } = pokemonStore;
  React.useEffect(() => {
    pokemonStore.fetchPokemon("001");
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
        <div className="detail-info__image">
          <img src={pokemon.img} alt={pokemon.name} />
        </div>
        <div className="detail-info__array">
          <div>{pokemon.info}</div>
          <h2>Types</h2>
          <div className="detail-info__type">
            {pokemon.types?.map((type) => {
              return <TypePokemon type={type} key={type} />;
            })}
          </div>
          <h2>Weaknesses</h2>
          <div className="detail-info__weak">
            {pokemon.weaknesses?.map((weakness) => {
              return <TypePokemon type={weakness} key={weakness} />;
            })}
          </div>
        </div>
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
