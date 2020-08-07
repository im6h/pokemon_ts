// import lib
import { Request, Response } from "express";
import Pokemon from "../models/pokemon";

/**
 * TODO: all method for controllor pokemon
 */

// get all pokemon controllers
export const getAllPokemon = async (req: Request, res: Response) => {
  try {
    const pokemons = await Pokemon.find({}).select("-__v");
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

// get pokemon by id
export const getPokemonById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const pokemon = await Pokemon.findOne({ _id: id });
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
    res.status(500).json({
      payload: "Server error",
    });
  }
};

// create new pokemon
export const createPokemon = async (req: Request, res: Response) => {
  try {
    let pokemon = new Pokemon(req.body);
    await pokemon.save();
    res.status(201).json({
      payload: pokemon,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      payload: "Server error",
    });
  }
};

// edit info pokemon
export const editPokemon = async (req: Request, res: Response) => {
  try {
    let id = req.params.id;
    let body = req.body;
    let pokemon = await Pokemon.findOne({ _id: id }).select("-__v");
    if (pokemon) {
      await Promise.all(
        Object.keys(body).map((key) => {
          pokemon[key] = body[key];
        }),
      );
      await pokemon.save();
      res.status(201).json({
        payload: pokemon,
      });
    } else {
      res.status(404).json({
        payload: "Not found pokemon",
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      payload: "Server error",
    });
  }
};

// delete info pokemon
export const deletePokemon = async (req: Request, res: Response) => {
  try {
    let id = req.params.id;
    let pokemon = await Pokemon.findOne({ _id: id }).select("-__v");
    if (pokemon) {
      await pokemon.remove();
      res.status(200).json({
        payload: "Delete success",
      });
    } else {
      res.status(404).json({
        payload: "Not found pokemon",
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      payload: "Server error",
    });
  }
};
