import { Response, Request } from 'express';
import OrderService from '../services/Order.service';

export default class OrderController {
  public service = new OrderService();

  public getAll = async (req:Request, res: Response) => {
    const orders = await this.service.getAll();

    return res.status(200).json(orders);
  };
}