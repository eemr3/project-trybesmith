import { Router } from 'express';
import OrderController from '../controllers/Order.controller';
import autheticationUser from '../middlewares/AuthMIddleware';
import ValidationMiddleware from '../middlewares/Validation.middleware';

const routes = Router();
const controller = new OrderController();
const validation = new ValidationMiddleware();

routes.get('/orders', controller.getAll);
routes.post(
  '/orders', 
  autheticationUser,
  validation.validationOrdersProductsIds, 
  controller.create,
);

export default routes;
