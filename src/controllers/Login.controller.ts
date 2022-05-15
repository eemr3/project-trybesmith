import { Request, Response } from 'express';
import Login from '../services/Login.service';

export default class UserLogin {
  public service = new Login();

  public login = async (req: Request, res: Response): Promise<Response> => {
    try {
      const { username, password } = req.body;
      const token = await this.service.login(username, password);
  
      return res.status(200).json({ token });
    } catch (error: unknown) {
      const errorStMs = error instanceof Error && error.message;
      
      return res.status(401).json({ message: errorStMs });
    }
  };
}