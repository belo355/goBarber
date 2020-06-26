import {Request, Response, NextFunction} from 'express';
import {verify} from 'jsonwebtoken';

import authConfig from '../config/auth';

export default function ensureAuthenticated( request: Request,
    response: Response, next: NextFunction): void{

  const authHeader = request.headers.authorization;

  if(!authHeader){
    throw new Error('JWT token is missing');
  }

  // const [, token] = authHeader.split(' ');
  // console.log(token);
  console.log(authConfig.jwt.secret);

  const {secret} = authConfig.jwt;

  try {
    //TODO: ENTENDER PQ O VERIFY NAO ESTA FUNCIONANDO
    const decoded = verify(authHeader, secret);
    console.log(decoded);

    return next();
  } catch (error) {
    throw new Error('Invalid JWT token');
  }

}
