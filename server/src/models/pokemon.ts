import * as mongoose from "mongoose";

const Schema = mongoose.Schema;
const pokemonSchema = new Schema(
  {
    num: {
      type: String,
      required: true,
    },
    name: {
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
    next_evolution: [
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
      },
    ],
    prev_evolution: [
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
      },
    ],
  },
  {
    timestamps: true,
  },
);

const Pokemon = mongoose.model("pokemon", pokemonSchema);
export default Pokemon;
