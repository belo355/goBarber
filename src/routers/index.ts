import { Router } from 'express';
import express from 'express';
import appoitmentRouters from './appoitments.routes';
import usersRouters from './users.routes';

const routes = Router();
routes.use(express.json());

routes.use("/appointments", appoitmentRouters);
routes.use("/users", usersRouters);


export default routes;
