import { Router } from 'express';
import UserLogin from '../controllers/Login.controller';
import ValidationMiddleware from '../middlewares/Validation.middleware';

const routes = Router();
const controller = new UserLogin();
const validate = new ValidationMiddleware();

routes.post('/login', validate.validationLogin, controller.login);

export default routes;