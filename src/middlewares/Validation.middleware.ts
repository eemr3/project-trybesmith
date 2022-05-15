import { Response, Request, NextFunction } from 'express';
import validateLogin from '../schemas/Login.schema';
import validateOrder from '../schemas/Order.schemas';
import validateProduct from '../schemas/Products.schema';
import validateUser from '../schemas/Users.schema';

export default class ValidationMiddleware {
  public validationProduct = (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Response | void => {
    const { name, amount } = req.body;
    const { error } = validateProduct.validate({ name, amount });

    if (error?.message.includes('is required')) {
      return res.status(400).json({ message: error.message });
    }

    if (
      error?.message.includes('must be a string')
      || error?.message.includes('length must be at')
    ) {
      return res.status(422).json({ message: error.message });
    }
    next();
  };

  public validationUser = (req: Request, res: Response, next: NextFunction) => {
    const { username, classe, level, password } = req.body;
    const { error } = validateUser.validate({ username, classe, level, password });
    if (error?.message.includes('is required')) {
      return res.status(400).json({ message: error.message });
    }
    if (error?.message.includes('must be')) {
      return res.status(422).json({ message: error.message });
    }

    if (error?.message.includes('length must be')) {
      return res.status(422).json({ message: error.message });
    }

    if (error?.message.includes('must be greater')) {
      return res.status(422).json({ message: error.message });
    }

    next();
  };

  public validationLogin = (req: Request, res: Response, next: NextFunction) => {
    const { username, password } = req.body;
    const { error } = validateLogin.validate({ username, password });
    if (error) {
      return res.status(400).json({ message: error.message });
    }

    next();
  };

  public validationOrdersProductsIds = (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    const { productsIds } = req.body;
    const { error } = validateOrder.validate({ productsIds });
    if (error?.message.includes('is requ')) {
      return res.status(400).json({ message: error.message });
    }

    if (productsIds.length === 0) {
      return res.status(422).json({ message: '"productsIds" must include only numbers' });
    }
    if (error?.message.includes('must be')) {
      return res.status(422).json({ message: error.message });
    }

    next();
  };
}
