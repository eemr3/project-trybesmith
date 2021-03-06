import ProductModel from '../models/Product.model';
import IProduct from '../interfaces/Product.interface';

export default class ProductService {
  public model = new ProductModel();

  public getAll = async (): Promise<IProduct[]> => {
    const products = await this.model.getAll();

    return products;
  };

  public create = async (
    name: string,
    amount: string,
    orderId: number,
  ): Promise<IProduct> => {
    const product = await this.model.create(name, amount, orderId);

    return product;
  };

  public update = async (orderId: number, productsId: number) => {
    const updateProduct = await this.model.update(orderId, productsId);
    return updateProduct;
  };
}
