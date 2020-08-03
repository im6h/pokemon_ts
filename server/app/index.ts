// import lib
import * as express from 'express';
import * as bodyParser from 'body-parser';

// import router
import router from '../routers';
const app: express.Application = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api/v1', router);
export default app;
