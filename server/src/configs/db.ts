import * as mongoose from "mongoose";

const mongoUrl = "mongodb://localhost:27017/pokedex";
const connect = mongoose
  .connect(mongoUrl, { useNewUrlParser: true })
  .then(() => {
    console.log(`✅ Connect database success`);
  })
  .catch((err) => {
    console.log(err);
    console.log(`Error when connect database`);
  });

export default connect;
