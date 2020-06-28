import { Router } from "express";
import { hash } from "bcryptjs";
import multer from "multer";
import uploadConfig from "../config/upload";

import createUserService from "../services/CreateUserService";
import ensureAuthenticated from "../middleware/ensureAuthenticated";
// import getUserService from "../services/GetUserService";

const usersRouters = Router();
const upload = multer(uploadConfig);

usersRouters.get("/", async (request, response) => {
  // try {
  //   const createUser = new getUserService();
  //   const user = createUser.execute();
  //   return response.json(user);
  // } catch (error) {
  //   return response.status(400).json({ error: error.message });
  // }
}),
  usersRouters.post("/", async (request, response) => {
    try {
      const { name, email, password } = request.body;
      const hashedPassword = await hash(password, 8);

      const createUser = new createUserService();
      const user = await createUser.execute({
        name,
        email,
        password: hashedPassword,
      });

      return response.status(200).json(user);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  });

usersRouters.patch("/avatar",ensureAuthenticated, upload.single("avatar"),
  async (request, response) => {
  console.log(request.file);
  return response.status(200).json({ message: "ok" });
  }
);

export default usersRouters;
