import React from 'react';
import '../styles/components/typePokemon.scss';
interface Props {
	type: string;
}

function TypePokemon({ type }: Props) {
	return (
		<div className="typePokemon">
			<div className={`typePokemon__type-${type.toLowerCase()}`}>
				<span>{type}</span>
			</div>
		</div>
	);
}

export default TypePokemon;
