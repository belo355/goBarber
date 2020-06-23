import { Router } from "express";
import { hash } from 'bcryptjs';

import createUserService from "../services/CreateUserService";
import getUserService from "../services/GetUserService";

const usersRouters = Router();


usersRouters.get("/", async (request, response) => {
  try {
    const createUser = new getUserService();
    const user = createUser.execute();
    return response.json(user);
  } catch (error) {
    return response.status(400).json({ error: error.message });
  }
}),

usersRouters.post("/", async (request, response) => {
  try {
    const {name , email, password} = request.body;
    const hashedPassword = await hash(password, 8);

    const createUser = new createUserService();
    const user = await createUser.execute({
      name,
      email,
      password:hashedPassword,
    });

    return response.json(user);
  } catch (error) {
    return response.status(400).json({ error: error.message });
  }
});

export default usersRouters;
