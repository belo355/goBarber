import User from "../models/User";
import { getRepository} from 'typeorm';

interface RequestDTO {
  name: string;
  email: string;
  password: string;
}


//TODO: Resolver get all de usuarios
class GetUserService {
  public async execute() : Promise<User[]> {
    const usersRepository = getRepository(User);
    const users = await usersRepository.find();
    return users;
  }
}

export default GetUserService;
