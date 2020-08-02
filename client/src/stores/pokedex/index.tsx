import axios from 'axios';
import { action, observable } from 'mobx';
import { createContext } from 'react';
interface Pokedex {
	name: string;
	url: string;
}

class PokedexStore {
	@observable pokedex: Pokedex[] = [];
	// @action async fetchListPokemon(offset: number, limit: number) {
	@action async fetchListPokemon() {
		try {
			let response = await axios.get(
				`https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json`
			);
			if (response.status === 200 && response.data) {
				this.pokedex = response.data.pokemon;
			} else {
				this.pokedex = [];
			}
		} catch (error) {
			console.log(error);
		}
	}
}

export default createContext(new PokedexStore());
