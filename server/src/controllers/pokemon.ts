// import lib
import { Request, Response } from "express";
import Pokemon from "../models/pokemon";

/**
 * TODO: all method for controllor pokemon
 * with get all pokemon,paging: 20 pokemon/ 1 page
 * get pokemon sort by number
 * get pokemon sort by name
 */

/**
 * TODO:
 */
export const getAllPokemon = async (req: Request, res: Response) => {
  try {
    const pokemons = await Pokemon.find({}).select("_id num name img types");
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
    res.status(500).json({
      payload: "Server internal error",
    });
  }
};

// paging all pokemon
export const pagingPokemon = async (req: Request, res: Response) => {
  try {
    let limit: number = Number(req.query.limit) || 10;
    let offset: number = Number(req.query.offset) || 0;
    let sort = req.query.sortBy || "num";
    const pokemons = await Pokemon.find({})
      .select("_id num name img types")
      .limit(limit)
      .skip(offset * limit)
      .sort(sort);
    if (pokemons.length > 0) {
      res.status(200).json({
        payload: pokemons,
      });
    } else {
      res.status(200).json({
        payload: [],
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      payload: "Server internal error",
    });
  }
};

// get pokemon by number
export const getPokemonById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const pokemon = await Pokemon.findOne({ num: id }).select("-__v");
    if (pokemon) {
      res.status(200).json({
        payload: pokemon,
      });
    } else {
      res.status(404).json({
        payload: "Not found",
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      payload: "Server internal error",
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
      payload: "Server internal error",
    });
  }
};

// edit info pokemon
export const editPokemon = async (req: Request, res: Response) => {
  try {
    let id = req.params.id;
    let body = req.body;
    let pokemon = await Pokemon.findOne({ num: id }).select("-__v");
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
      payload: "Server internal error",
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
      payload: "Server internal error",
    });
  }
};
