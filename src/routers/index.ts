import { Router } from 'express';
import express from 'express';
import appoitmentRouters from './appoitments.routes';

const routes = Router();
routes.use(express.json());

routes.use("/appoitments", appoitmentRouters);

export default routes;
