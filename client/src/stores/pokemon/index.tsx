import axios from 'axios';
import { action, observable } from 'mobx';
import { createContext } from 'react';
interface Pokemon {
	name?: string;
	types?: Array<Object>;
	height?: number;
	weight?: number;
}

class PokemonStore {
	@observable pokemon: Pokemon = {};
	// @action async fetchListPokemon(offset: number, limit: number) {
	@action async fetchPokemon(name: string) {
		try {
			let response = await axios.get(
				`https://pokeapi.co/api/v2/pokemon/${name}/`
			);
			if (response.status === 200 && response.data) {
				this.pokemon = response.data;
			} else {
				this.pokemon = {};
			}
		} catch (error) {
			console.log(error);
		}
	}
}

export default createContext(new PokemonStore());
