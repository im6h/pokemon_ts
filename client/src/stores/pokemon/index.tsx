import axios from "axios";
import { action, observable } from "mobx";
import { createContext } from "react";
import { Pokemon } from "../../interface/pokemon";

class PokemonStore {
  @observable pokemon: Pokemon = {};
  @observable nextPokemon: Pokemon = {};
  @observable prevPokemon: Pokemon = {};

  /**
   * TODO:
   * get data api with params id
   * check response.status and response.data
   * if exist response.data => this.pokemon = data
   * else this.pokemon = {}
   */

  @action async fetchPokemon(id: string) {
    try {
      let response = await axios.get(
        `http://localhost:8000/api/v1/pokemons/${id}`,
      );
      if (response.status === 200 && response.data) {
        this.pokemon = response.data.payload.pokemon;
        this.prevPokemon = response.data.payload.prev_pokemon;
        this.nextPokemon = response.data.payload.next_pokemon;
      } else {
        this.pokemon = {};
      }
    } catch (error) {
      this.pokemon = {};
      console.log(error);
    }
  }
}

export default createContext(new PokemonStore());
