import express from 'express';
import { ProductRoutes, UserRoutes, OrderRoutes } from './routes';

const app = express();

app.use(express.json());

app.use(ProductRoutes);
app.use(UserRoutes);
app.use(OrderRoutes);

export default app;
