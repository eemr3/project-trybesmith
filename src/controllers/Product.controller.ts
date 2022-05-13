import { Request, Response } from 'express';
import ProductService from '../services/Products.service';

export default class ProductController {
  public service = new ProductService();

  public getAll = async (req: Request, res: Response): Promise<Response> => {
    const products = await this.service.getAll();

    return res.status(200).json(products);
  };
}
