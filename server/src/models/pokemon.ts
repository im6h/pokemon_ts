// import lib
import { Schema, model } from "mongoose";

// create schema
const pokemonSchema = new Schema(
  // property schema
  {
    num: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    info: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    types: {
      type: Array,
    },
    height: {
      type: String,
      required: true,
    },
    weight: {
      type: String,
      required: true,
    },
    weaknesses: {
      type: Array,
    },
    evolution: [
      {
        num: {
          type: String,
        },
        name: {
          type: String,
        },
        img: {
          type: String,
        },
        types: {
          type: Array,
        },
      },
    ],
  },
  {
    timestamps: true,
  },
);

const Pokemon = model("pokemon", pokemonSchema);
export default Pokemon;
