import User from "../models/User";
import { getRepository} from 'typeorm';

class GetUserServices {
  public async execute() : Promise<User[]> {
    const usersRepository = getRepository(User);

    const users = await usersRepository.find();

    //TODO: delete password Users
    // for(var i = 0 ; i < users.length; i++) {
    //   // users[i].
    // }
    return users;
  }
}

export default GetUserServices;
