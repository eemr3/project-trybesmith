import { Router } from 'express';
import ProductController from '../controllers/Product.controller';
import ValidationMiddleware from '../middlewares/Validation.middleware';

const routes = Router();
const productController = new ProductController();
const productMiddleware = new ValidationMiddleware();

routes.get('/products', productController.getAll);
routes.post('/products', productMiddleware.validationProduct, productController.create);

export default routes;
