import { Router } from 'express';
import UserController from '../controllers/User.controller';
import ValidationMiddleware from '../middlewares/Validation.middleware';

const routes = Router();
const userController = new UserController();
const validateUser = new ValidationMiddleware();

routes.post('/users', validateUser.validationUser, userController.create);

export default routes;
