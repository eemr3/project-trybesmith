import OrderModel from '../models/Order.model';

export default class OrderService {
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
}