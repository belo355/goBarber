import User from "../models/User";
import { getRepository} from 'typeorm';

import AppError from '../errors/AppErro';

interface RequestDTO {
  name: string;
  email: string;
  password: string;
}

class CreateUserService {
  public async execute({ name, email, password } : RequestDTO) : Promise<User> {
    const usersRepository = getRepository(User);

    const checkUserExists = await usersRepository.findOne({
      where: { email: email},
    });

    if(checkUserExists){
      throw new AppError('Email address already used.',400);
    }

    const user = usersRepository.create({
      name,
      email,
      password,
    })

    await usersRepository.save(user);
    return user;
  }


}

export default CreateUserService;
