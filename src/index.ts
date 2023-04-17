require('dotenv').config();
import * as express from 'express';
import { Application } from 'express';
import { UserRouter } from './routes/users';

const port :number = +process.env.PORT;

// Type the app const.
const app:Application = express();

app.use('/user', UserRouter);

app.listen(port, () => {
    console.info(`server listenning on port ${port}`)
})