// import lib, components
import React from 'react';
import TypePokemon from '../components/TypePokemon';

// import style
import '../styles/components/cardPokemon.scss';

/**
 * interface Props to recive prop from parent
 */
interface Props {
	/** ? is option: need or no */
	num?: number;
	name?: string;
	img?: string;
	type?: Array<string>;
}

/**
 * function CardPokemon render view card pokemon.
 * @param Props
 */
function CardPokemon({ num, name, type }: Props) {
	return (
		<div className="card">
			{/* image to display pokemon */}
			<div className="card__imagePokemon">
				<img
					src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${num}.png`}
					alt={name}
					loading="lazy"
				/>
			</div>
			{/* image to display pokemon */}

			{/* info pokemon */}
			<div className="card__infoPokemon">
				<p className="card__infoPokemon-num">#{num}</p>
				<p className="card__infoPokemon-name">{name}</p>
			</div>
			{/* display pokemon */}

			{/* type pokemon */}
			<div className="card__typePokemon">
				{type?.map((e: string) => {
					return <TypePokemon type={e} key={e} />;
				})}
			</div>
			{/* display pokemon */}
		</div>
	);
}

export default CardPokemon;
