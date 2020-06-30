import { getRepository} from 'typeorm';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import authConfig from '../config/auth';

import AppError from '../errors/AppErro';

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
      throw new AppError('Incorrect email/password combination.',401);
    }

    /**
     *  compare pass session on pass user cripto
     */
    const passwordMatched = await compare(password, user.password);
    if(!passwordMatched){
      throw new AppError('Incorrect email/password combination.', 401);
    }

     /**
     *  usuario autenticado, gerar token
     */
     const { secret, expiresIn} = authConfig.jwt;
     const token = sign({}, secret, {
       subject: user.id,
       expiresIn,
     });

    return {
      user,
      token,
    };
  }
}

export default AuthenticateUserService;
