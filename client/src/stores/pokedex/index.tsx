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
   */
  @action async fetchListPokemon() {
    try {
      let response = await axios.get(
        `https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json`,
      );

      // check response status and response data
      if (response.status === 200 && response.data) {
        this.pokedex = response.data.pokemon;
      } else {
        this.pokedex = []; // return array empty if response error
      }
    } catch (error) {
      console.log(error);
    }
  }
}

export default createContext(new PokedexStore());
