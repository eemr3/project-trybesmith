import { NextFunction, Request, Response } from 'express';
import UserService from '../services/User.service';
import AuthUser from '../auth/AuthenticationUser';

const authUser = new AuthUser();
const service = new UserService();

const autheticationUser = async (
  req: Request,
  res: Response, 
  next: NextFunction,
): Promise<Response | void> => {
  const { authorization } = req.headers;
  
  const token = authorization;

  if (!token) return res.status(404).json({ message: 'Token not foud' });
  
  const decoder = authUser.decodedToken(token);
  
  if (!decoder) return res.status(401).json({ message: 'Expirede or token invalid' });
  const userExist = await service.getByUsrName(decoder);
  if (!userExist) return res.status(400).json({ message: 'User not found' });
  
  next();
};

export default autheticationUser;