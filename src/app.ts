import express from 'express';
import { ProductRoutes, UserRoutes } from './routes';

const app = express();

app.use(express.json());

app.use(ProductRoutes);
app.use(UserRoutes);

export default app;
