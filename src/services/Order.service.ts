import OrderModel from '../models/Order.model';
import ProductModel from '../models/Product.model';
import AuthUser from '../auth/AuthenticationUser';

export default class OrderService {
  public authUser = new AuthUser();

  poductModel = new ProductModel();

  public model = new OrderModel();

  public getAll = async () => {
    const result = await this.model.getAllProductsIds();
    const orders = await this.model.getAll();

    const newOrders = orders.map((item) => ({
      id: item.id,
      userId: item.usId,
      productsIds: result.filter((pd) => pd.ordId === item.id).map((pdr) => pdr.prdId),
    }));

    return newOrders;
  };

  public create = async (userId: number, prodIds: Array<number>) => {
    const result = await this.model.createOrder(userId);
    await Promise.all(
      prodIds.map(async (item) => {
        await this.poductModel.update(result.id, item);
      }),
    );

    return {
      userId,
      productsIds: prodIds,
    };
  };
}
