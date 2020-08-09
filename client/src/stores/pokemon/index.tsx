import axios from "axios";
import { action, observable } from "mobx";
import { createContext } from "react";
import { Pokemon } from "../../interface/pokemon";

class PokemonStore {
  @observable pokemon: Pokemon = {};
  // @action async fetchListPokemon(offset: number, limit: number) {
  @action async fetchPokemon(id: string) {
    try {
      let response = await axios.get(
        `http://localhost:8000/api/v1/pokemons/${id}`,
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
