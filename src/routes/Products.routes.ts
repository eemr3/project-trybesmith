import { Router } from 'express';
import ProductController from '../controllers/Product.controller';

const routes = Router();
const productController = new ProductController();

routes.get('/products', productController.getAll);

export default routes;
