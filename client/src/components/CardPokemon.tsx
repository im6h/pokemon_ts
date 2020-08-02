import * as React from 'react';
import '../styles/components/cardPokemon.scss';
import TypePokemon from '../components/TypePokemon';

/**
 * Card view basic info pokemon to display in Home page.
 *
 */
interface Props {
	num?: number;
	name?: string;
	img?: string;
	type?: Array<string>;
}

function CardPokemon({ num, name, img, type }: Props) {
	return (
		<div className="card">
			{/* image to display pokemon */}
			<div className="card__imagePokemon">
				<img src={img} alt={name} />
			</div>
			{/* image to display pokemon */}

			{/* image to info pokemon */}
			<div className="card__infoPokemon">
				<p className="card__infoPokemon-num">#{num}</p>
				<p className="card__infoPokemon-name">{name}</p>
			</div>
			{/* image to display pokemon */}

			{/* image to type pokemon */}
			<div className="card__typePokemon">
				{type?.map((e: string) => {
					return <TypePokemon type={e} key={e} />;
				})}
			</div>
			{/* image to display pokemon */}
		</div>
	);
}

export default CardPokemon;
