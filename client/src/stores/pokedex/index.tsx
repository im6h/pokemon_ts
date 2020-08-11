import axios from "axios";
import { action, observable } from "mobx";
import { createContext } from "react";
interface Pokedex {
  name: string;
  url: string;
}

class PokedexStore {
  @observable pokedex: Pokedex[] = [];

  /**
   * function fetchListPokemon: fetch list pokemon to adapter pokedex variable,
   * @param: no param
   * check response status and response data
   * if exist data return this.pokedex = data
   * else return []
   */
  @action async fetchListPokemon() {
    try {
      let response = await axios.get(`http://localhost:8000/api/v1/pokemons`);
      if (response.status === 200 && response.data) {
        this.pokedex = response.data.payload;
      } else {
        this.pokedex = [];
      }
    } catch (error) {
      console.log(error);
      this.pokedex = [];
    }
  }
}

export default createContext(new PokedexStore());
