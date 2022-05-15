import connection from './connection';
import { IOrder, IProdOrder } from '../interfaces/Order.interface';

export default class OrderModel {
  public getAll = async (): Promise<IOrder[]> => {
    const [orders] = await connection.execute(`SELECT od.id as id, us.id as usId
    FROM Trybesmith.Orders as od
        INNER JOIN Trybesmith.Users as us
        ON od.userId  = us.id`);

    return orders as IOrder[];
  };

  public getAllProductsIds = async (): Promise<IProdOrder[]> => {
    const [result] = await connection.execute(`SELECT pd.id as prdId, o.id as ordId
    FROM Trybesmith.Products as pd
    INNER JOIN Trybesmith.Orders as o
    ON o.id = pd.orderId`);

    return result as IProdOrder[];
  };
}