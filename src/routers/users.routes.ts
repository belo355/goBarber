import { Router } from "express";
import { hash } from "bcryptjs";
import multer from "multer";
import uploadConfig from "../config/upload";

import getUserService from "../services/GetUserServices";
import createUserService from "../services/CreateUserService";
import UpdateUserAvatarService from "../services/UpdateUserAvatarService";

import ensureAuthenticated from "../middleware/ensureAuthenticated";
// import User from "../models/User";
// import getUserService from "../services/GetUserService";

const usersRouters = Router();
const upload = multer(uploadConfig);

usersRouters.get("/", async (request, response) => {
  try {
    const getUsers = new getUserService();
    const user = await getUsers.execute();

    return response.json(user);
  } catch (error) {
    return response.status(400).json({ error: error.message });
  }
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

usersRouters.patch("/avatar",ensureAuthenticated,upload.single("avatar"),
  async (request, response) => {
    try {
      const updateUserAvatar = new UpdateUserAvatarService();

      const user = await updateUserAvatar.execute({
        user_id: request.user.id,
        avatarFilename: request.file.filename,
      });

      // console.log(request.file);
      return response.status(200).json(user);

    } catch (error) {
      //TODO: AJUSTAR RETORNO DE ERRO AO ATUALIZAR AVATAR DE USUARIO
      return response.status(400).json({ error: error.message });
    }
  },
);

export default usersRouters;
