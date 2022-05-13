import ProductModel from '../models/Product.model';
import IProduct from '../../interfaces/Product.interface';

export default class ProductService {
  public model = new ProductModel();

  public getAll = async (): Promise<IProduct[]> => {
    const products = await this.model.getAll();

    return products;
  };
}
