// import lib, component
import React from "react";
import { observer } from "mobx-react-lite";
import PokedexStore from "../stores/pokedex";
import CardPokemon from "../components/CardPokemon";
import { Pokemon } from "../interface/pokemon";
import { formatNumber } from "../utils/format";
import { Link } from "react-router-dom";

// import styles scss
import "../styles/pages/home.scss";

/**
 * TODO:
 * function Home to render home page.
 * No params.
 * fetch ListPokemon when render view.
 */
function Home() {
  // const regex: RegExp = /\W/;
  // use pokedexStore
  const pokedexStore = React.useContext(PokedexStore);
  const [offset, setOffset] = React.useState(0);

  React.useEffect(() => {
    pokedexStore.fetchListPokemon(offset);
  }, [offset]);
  const passIdPokemon = async (id: string) => {
    // await pokemonStore.fetchPokemon(id);
  };
  return (
    <div className="container">
      {/* list pokemon */}
      <div className="container__list">
        {pokedexStore.pokedex.map((pokemon: Pokemon) => {
          return (
            <Link
              to={`/detail/${String(formatNumber(Number(pokemon.num)))}`}
              // .replace(" ", "")
              // .replace(regex, "-")
              // .toLowerCase()}`}
              onClick={() => {
                passIdPokemon(String(pokemon.num));
              }}
              key={pokemon.num}
            >
              {/* card block pokemon */}
              <CardPokemon
                name={pokemon.name}
                img={pokemon.img}
                num={pokemon.num}
                types={pokemon.types}
              />
              {/* ---- */}
            </Link>
          );
        })}
      </div>
      {/* ---- */}
      <div className="container__load">
        <button
          onClick={() => {
            setOffset(offset + 1);
          }}
        >
          Load more
        </button>
      </div>
    </div>
  );
}
export default observer(Home);
