import * as mongoose from "mongoose";

const connect = mongoose.connect("mongodb://localhost/pokedex");

export default connect;
