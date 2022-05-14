import jwt, { SignOptions } from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export default class AuthUser {
  private SECRET_KEY = 'palavra secreata';

  private config: SignOptions = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };

  public createToken = (user: object): string => {
    const token = jwt.sign({ data: user }, this.SECRET_KEY, this.config);
    return token;
  };

  public decodedToken = (token:string) => {
    try {
      const decoder = jwt.verify(token, this.SECRET_KEY);
      return decoder;
    } catch (error) {
      return false;
    }
  };
}