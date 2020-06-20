import express from 'express';
import routes from './routers';

import './database/index';

const app = express();

app.use(routes);
app.use(express.json());

app.listen(3333, () =>{
  console.log('start server on port 3333');
} )
