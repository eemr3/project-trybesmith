import jwt, { SignOptions } from 'jsonwebtoken';
import dotenv from 'dotenv';
import IToken from '../interfaces/Token.interface';

dotenv.config();

type User = {
  id: number;
  username: string;
  password: string;
};
export default class AuthUser {
  private SECRET_KEY = 'palavra secreata';

  private config: SignOptions = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };

  public createToken = (user: User): string => {
    const { id, username, password } = user;
    const token = jwt.sign({ id, username, password }, this.SECRET_KEY, this.config);
    return token;
  };

  public decodedToken = (token: string) => {
    try {
      const decoder = jwt.verify(token, this.SECRET_KEY);
      return decoder as IToken;
    } catch (error) {
      return false;
    }
  };
}
