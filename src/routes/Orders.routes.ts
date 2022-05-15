import { Router } from 'express';
import OrderController from '../controllers/Order.controller';

const routes = Router();
const controller = new OrderController();

routes.get('/orders', controller.getAll);

export default routes;