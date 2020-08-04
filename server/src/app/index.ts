// import lib
import * as express from "express";
import * as bodyParser from "body-parser";
import * as morgan from "morgan";
import * as cors from "cors";

// import router
import router from "../routers";
const app: express.Application = express();

// TODO: use cors, morgan
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("tiny"));
app.use(cors());
app.use("/api/v1", router);

export default app;
