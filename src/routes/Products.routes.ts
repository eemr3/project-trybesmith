import { Router } from 'express';
import ProductController from '../controllers/Product.controller';
import ProductMiddleware from '../middlewares/Products.middleware';

const routes = Router();
const productController = new ProductController();
const productMiddleware = new ProductMiddleware();

routes.get('/products', productController.getAll);
routes.post('/products', productMiddleware.validationProduct, productController.create);

export default routes;
