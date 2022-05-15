import { Response, Request } from 'express';
import OrderService from '../services/Order.service';
import AuthUser from '../auth/AuthenticationUser';
import IToken from '../interfaces/Token.interface';

export default class OrderController {
  public authUser = new AuthUser();

  public service = new OrderService();

  public getAll = async (req: Request, res: Response): Promise<Response> => {
    const orders = await this.service.getAll();

    return res.status(200).json(orders);
  };

  public create = async (req: Request, res: Response): Promise<Response> => {
    const { productsIds } = req.body;
    const { authorization } = req.headers;
    const token = authorization as string;
    const decoded = this.authUser.decodedToken(token);
    const { id } = decoded as IToken;
    const newOrder = await this.service.create(id, productsIds);

    return res.status(201).json(newOrder);
  };
}
