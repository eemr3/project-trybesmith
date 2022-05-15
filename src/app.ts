import express from 'express';
import { ProductRoutes, UserRoutes, OrderRoutes, LoginRoutes } from './routes';

const app = express();

app.use(express.json());

app.use(ProductRoutes);
app.use(UserRoutes);
app.use(OrderRoutes);
app.use(LoginRoutes);

export default app;
