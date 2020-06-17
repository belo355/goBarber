import express from 'express';
import routes from './routers';

const app = express();

app.use(routes);
app.use(express.json());

app.listen(3333, () =>{
  console.log('start server on port 3333');
} )
