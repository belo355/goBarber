import { Router } from "express";

import createUserService from "../services/CreateUserService";

const usersRouters = Router();

usersRouters.post("/", async (request, response) => {
  try {
    const {name , email, password} = request.body;

    const createUser = new createUserService();

    const user = await createUser.execute({
      name,
      email,
      password,
    })

    return response.json(user);
  } catch (error) {
    return response.status(400).json({ error: error.message });
  }
});

export default usersRouters;
