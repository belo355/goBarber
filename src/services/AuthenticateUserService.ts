import { getRepository} from 'typeorm';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import authConfig from '../config/auth';

import User from "../models/User";

interface Request{
  email: string;
  password: string;
}

interface Response {
  user: User;
  token: string;
}

class AuthenticateUserService {
  public async execute({email, password}: Request): Promise<Response>{
    const userRepository = getRepository(User);

    const user = await userRepository.findOne({where: {email: email}});
    if(!user){
      throw new Error('Incorrect email/password combination.');
    }

    /**
     *  compare pass session on pass user cripto
     */
    const passwordMatched = await compare(password, user.password);
    if(!passwordMatched){
      throw new Error('Incorrect email/password combination.');
    }

     /**
     *  usuario autenticado, gerar token
     */
     const token = sign({}, authConfig.jwt.secret, {
       subject: user.id,
       expiresIn: authConfig.jwt.expiresIn,

     });

    return {
      user,
      token,
    };
  }
}

export default AuthenticateUserService;
