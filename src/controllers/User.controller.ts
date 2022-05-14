import { Request, Response } from 'express';
import AuthUser from '../auth/AuthenticationUser';
import UserService from '../services/User.service';

const authUser = new AuthUser();

export default class UserController {
  public service = new UserService();

  public create = async (req: Request, res: Response): Promise<Response> => {
    const { username, classe, level, password } = req.body;

    const user = await this.service.create({ username, classe, level, password });
    const token = authUser.createToken(user);
    return res.status(201).json({ token });
  };
}
