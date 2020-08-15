// import lib
import { Request, Response } from "express";
import Pokemon from "../models/pokemon";
import { HttpStatus } from "../utils/HttpStatus";

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
    let limit: number = Number(req.query.limit) || 12;
    let offset: number = Number(req.query.offset) || 0;
    let sort = req.query.sortBy || "num";
    const pokemons = await Pokemon.find({})
      .select("_id num name img types")
      .limit(limit)
      .skip(offset * limit)
      .sort(sort);
    if (pokemons.length > 0) {
      res.status(HttpStatus.OK).json({
        payload: pokemons,
      });
    } else {
      res.status(HttpStatus.NO_CONTENT).end();
    }
  } catch (err) {
    console.log(err);
    res.status(HttpStatus.SERVER_ERROR).json({
      error: err,
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
        ? await Pokemon.findOne({ num: 1 }).select("num name -_id")
        : await Pokemon.findOne({ num: Number(id) + 1 }).select(
            "num name -_id",
          );

    const prevPokemon =
      Number(id) - 1 === 0
        ? await Pokemon.findOne({ num: totalDocument }).select("num name -_id")
        : await Pokemon.findOne({ num: Number(id) - 1 }).select(
            "num name -_id",
          );
    if (pokemon) {
      res.status(HttpStatus.OK).json({
        payload: {
          pokemon: pokemon,
          next_pokemon: nextPokemon,
          prev_pokemon: prevPokemon,
        },
      });
    } else {
      res.status(HttpStatus.NOT_FOUND).end();
    }
  } catch (err) {
    console.log(err);
    res.status(HttpStatus.SERVER_ERROR).json({
      error: err,
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
    res.status(HttpStatus.CREATED).end();
  } catch (err) {
    console.log(err);
    res.status(HttpStatus.SERVER_ERROR).json({
      error: err,
    });
  }
};

/**
 * TODO: editPokemon
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
      res.status(HttpStatus.NO_CONTENT).end();
    } else {
      res.status(HttpStatus.NOT_FOUND).end();
    }
  } catch (err) {
    console.log(err);
    res.status(HttpStatus.SERVER_ERROR).json({
      error: err,
    });
  }
};

/**
 * TODO: deletePokemon
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
      res.status(HttpStatus.NO_CONTENT).end();
    } else {
      res.status(HttpStatus.NOT_FOUND).end();
    }
  } catch (err) {
    console.log(err);
    res.status(HttpStatus.SERVER_ERROR).json({
      error: err,
    });
  }
};
