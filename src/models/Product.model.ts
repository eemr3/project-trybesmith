import { ResultSetHeader } from 'mysql2/promise';
import connection from './connection';
import IProduct from '../../interfaces/Product.interface';

export default class ProductModel {
  public getAll = async (): Promise<IProduct[]> => {
    const [result] = await connection.execute('SELECT * FROM Trybesmith.Products');

    return result as IProduct[];
  };

  public create = async (name: string, amount: string): Promise<IProduct> => {
    const [product] = await connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Products (name, amount) VALUES(?,?)',
      [name, amount],
    );

    return {
      id: product.insertId,
      name,
      amount,
    };
  };
}
