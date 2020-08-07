// import lib, component
import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import PokedexStore from '../stores/pokedex';
import CardPokemon from '../components/CardPokemon';
import { Link } from 'react-router-dom';

// import styles scss
import '../styles/pages/home.scss';

/**
 * function Home to render home page.
 * No params
 */
function Home() {
	// use pokedexStore
	const pokedexStore = React.useContext(PokedexStore);
	const regex: RegExp = /\W/;
	// use useEffect to fetch all pokemon with function fecthListPokemon in pokedexStore
	useEffect(() => {
		pokedexStore.fetchListPokemon();
	}, []);

	return (
		<div className="container">
			<div className="container__list">
				{pokedexStore.pokedex.map((pokemon: any) => {
					return (
						// card pokemon
						<Link
							to={`/detail/${pokemon.name
								.replace(' ', '')
								.replace(regex, '-')
								.toLowerCase()}`}
							key={pokemon.num}
						>
							<CardPokemon
								name={pokemon.name}
								img={pokemon.img}
								num={pokemon.num}
								types={pokemon.types}
							/>
						</Link>
					);
				})}
			</div>
		</div>
	);
}
export default observer(Home);
