import User from "../models/User";
import { getRepository} from 'typeorm';

class GetUserServices {
  public async execute() : Promise<User[]> {
    const usersRepository = getRepository(User);

    const users = await usersRepository.find();
    return users;
  }
}

export default GetUserServices;
