import express from 'express';
import ProductRoute from './routes/Products.routes';

const app = express();

app.use(express.json());

app.use(ProductRoute);

export default app;
