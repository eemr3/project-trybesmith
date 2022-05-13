import { Response, Request, NextFunction } from 'express';
import validateProduct from '../schemas/Products.schema';

export default class ProductMiddleware {
  public validationProduct = (req: Request, res: Response, next: NextFunction) => {
    const { name, amount } = req.body;
    const { error } = validateProduct.validate({ name, amount });

    if (error?.message.includes('is required'))
      return res.status(400).json({ message: error.message });

    if (
      error?.message.includes('must be a string') ||
      error?.message.includes('length must be at')
    )
      return res.status(422).json({ message: error.message });

    // if (error?.message.includes('length must be at'))
    //   return res.status(422).json({ message: error.message });

    next();
  };
}
