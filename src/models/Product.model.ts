import { ResultSetHeader } from 'mysql2/promise';
import connection from './connection';
import IProduct from '../interfaces/Product.interface';

export default class ProductModel {
  public getAll = async (): Promise<IProduct[]> => {
    const [result] = await connection.execute('SELECT * FROM Trybesmith.Products');

    return result as IProduct[];
  };

  public create = async (
    name: string,
    amount: string,
    orderId: number | null = null,
  ): Promise<IProduct> => {
    const [product] = await connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Products (name, amount, orderId) VALUES(?,?,?)',
      [name, amount, orderId],
    );

    return {
      id: product.insertId,
      name,
      amount,
    };
  };

  public update = async (orderId: number, productsId: number) => {
    const updateProduct = await connection.execute(
      'UPDATE Trybesmith.Products SET orderId = ? WHERE id = ?',
      [orderId, productsId],
    );
    return updateProduct;
  };
}
