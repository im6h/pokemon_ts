import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import PokedexStore from '../stores/pokedex';
import CardPokemon from '../components/CardPokemon';
import '../styles/pages/home.scss';
import { Link } from 'react-router-dom';
function Home() {
	const pokedexStore = React.useContext(PokedexStore);

	useEffect(() => {
		pokedexStore.fetchListPokemon();
	}, []);

	return (
		<div className="container">
			<div className="container__list">
				{pokedexStore.pokedex.map((pokemon: any) => {
					return (
						<Link to={`/detail/${pokemon.name}`} key={pokemon.num}>
							<CardPokemon
								name={pokemon.name}
								img={pokemon.img}
								num={pokemon.num}
								type={pokemon.type}
							/>
						</Link>
					);
				})}
			</div>
		</div>
	);
}
export default observer(Home);
