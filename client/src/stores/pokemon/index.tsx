import axios from 'axios';
import { action, observable } from 'mobx';
import { createContext } from 'react';
interface Pokemon {
	num?: string;
	name?: string;
	types?: Array<string>;
	height?: number;
	weight?: number;
	img?: string;
	weaknesses?: Array<string>;
	next_evolution?: Array<object>;
	prev_evolution?: Array<object>;
}

class PokemonStore {
	@observable pokemon: Pokemon = {};
	// @action async fetchListPokemon(offset: number, limit: number) {
	@action async fetchPokemon(id: string) {
		try {
			let response = await axios.get(
				`http://localhost:8000/api/v1/pokemons/${id}`
			);
			if (response.status === 200 && response.data) {
				this.pokemon = response.data.payload;
			} else {
				this.pokemon = {};
			}
		} catch (error) {
			console.log(error);
		}
	}
}

export default createContext(new PokemonStore());
