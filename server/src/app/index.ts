// import lib
import * as express from "express";
import * as bodyParser from "body-parser";
import * as morgan from "morgan";
import * as cors from "cors";
import * as mongoose from "mongoose";

// import router
import router from "../routers";
const app: express.Application = express();
// const mongoUrl = "mongodb://localhost:27017/pokedex";

//mongoose.Promise = global.Promise;
const uri =
  "mongodb+srv://dangvu:haidang1807^^@cluster0-6rrys.azure.mongodb.net/pokedex?retryWrites=true&w=majority";

// connect mongodb
mongoose
  .connect(uri, { useNewUrlParser: true })
  .then(() => {
    console.log(`✅ Connect database success`);
  })
  .catch((err) => {
    console.log(err);
    console.log(`Error when connect database`);
  });

// use cors, morgan
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("tiny"));
app.use(cors());
app.use("/api/v1", router);

export default app;
