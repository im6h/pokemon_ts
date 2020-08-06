import { Request, Response } from "express";
import Pokemon from "../models/pokemon";

export const getAllPokemon = async (req: Request, res: Response) => {
  try {
    const pokemons = await Pokemon.find({});
    if (pokemons.length > 0) {
      res.status(200).json({
        payload: pokemons,
      });
    } else {
      res.status(200).json({
        payload: "No pokemon",
      });
    }
  } catch (err) {
    console.log(err);
  }
};
export const getPokemonById = (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const pokemon = Pokemon.findOne({ _id: id });
    if (pokemon) {
      res.status(200).json({
        payload: pokemon,
      });
    } else {
      res.json(404).json({
        payload: "Not found",
      });
    }
  } catch (err) {
    console.log(err);
  }
};
export const createPokemon = (req: Request, res: Response) => {
  try {
    let pokemon = new Pokemon(req.body);
    console.log(pokemon);
    pokemon
      .save()
      .then((data) => {
        res.status(201).json({
          payload: data,
        });
      })
      .catch((e) => {
        res.status(500).json({
          payload: "Server error",
        });
      });
  } catch (err) {
    console.log(err);
  }
};
