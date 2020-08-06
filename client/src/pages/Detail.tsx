import React from 'react';
import '../styles/pages/detail.scss';

function Detail() {
	return (
		<div className="container">
			<div className="detail__image">
				<img
					src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/005.png"
					alt=""
				/>
			</div>
			<div className="detail__info">
				<div>
					<p>Dang Vh</p>
				</div>
			</div>
		</div>
	);
}
export default Detail;
