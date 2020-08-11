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
//export const getAllPokemon = async (req: Request, res: Response) => {
//  try {
//    const pokemons = await Pokemon.find({}).select("_id num name img types");
//    if (pokemons.length > 0) {
//      res.status(200).json({
//        payload: pokemons,
//      });
//    } else {
//      res.status(200).json({
//        payload: "No pokemon",
//      });
//    }
//  } catch (err) {
//    console.log(err);
//    res.status(500).json({
//      payload: "Server internal error",
//    });
//  }
//};

/**
 * TODO:
 * get limit, offset, sort from request
 * find all pokemons with limit, offset and request
 * check pokemons length
 * if length > 0 return pokemons
 * else return []
 */
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

/**
 * TODO:
 * get id from request
 * find pokemon with id
 * if pokemon not exist => log not found and return {}
 * else return pokemon.
 */
export const getPokemonById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const totalDocument = await Pokemon.countDocuments();
    const pokemon = await Pokemon.findOne({ num: id }).select("-__v");

    const nextPokemon =
      Number(id) === totalDocument
        ? await Pokemon.findOne({ num: "001" }).select("num name -_id")
        : await Pokemon.findOne({ num: `00${Number(id) + 1}` }).select(
            "num name -_id",
          );

    const prevPokemon =
      Number(id) - 1 === 0
        ? await Pokemon.findOne({ num: `00${Number(totalDocument)}` }).select(
            "num name -_id",
          )
        : await Pokemon.findOne({ num: `00${Number(id) - 1}` }).select(
            "num name -_id",
          );
    if (pokemon) {
      res.status(200).json({
        payload: {
          pokemon: pokemon,
          next_pokemon: nextPokemon,
          prev_pokemon: prevPokemon,
        },
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

/**
 * TODO:
 * create new model pokemon
 * check pokemon exist
 * if not exist => create pokemon
 * exist => log error
 */
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

/**
 * TODO:
 * get id from req.params
 * check pokemon exist with id
 * if not exist => log not found
 * exist => edit pokemon with req.body
 */
export const editPokemon = async (req: Request, res: Response) => {
  try {
    let { id } = req.params;
    let { body } = req.body;
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

/**
 * TODO:
 * get id from request
 * check pokemon exist with id
 * if not exist => log not found pokemon
 * exist => delete pokemon.
 */
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
