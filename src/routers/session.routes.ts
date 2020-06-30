import { Router } from "express";
import AuthenticateUserService from '../services/AuthenticateUserService';

const sessionsRouters = Router();

sessionsRouters.post("/", async (request, response) => {
  const {email, password} = request.body;

  const authenticateUserService = new AuthenticateUserService();

  const user = await authenticateUserService.execute({
    email,
    password,
  });

  return response.json(user);
})

export default sessionsRouters;
