import express from 'express';
import bodyParser from 'body-parser';
import helmet from "helmet";

import userRoutes from './routes'

const app = express();
app.use(bodyParser.json())
app.use(helmet());


app.get('/', (req, res) => res.send('Hello World!'));

app.use(userRoutes)


const port = 8080;

app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`Server is listening on port ${port}`)
});

export {app};