import { ResultSetHeader } from 'mysql2/promise';
import connection from './connection';
import IUser from '../../interfaces/User.interface';

type User = {
  username: string;
  classe: string;
  level: number;
  password: string;
};

export default class UserModel {
  public create = async ({ username, classe, level, password }: User): Promise<IUser> => {
    const [user] = await connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES(?,?,?,?)',
      [username, classe, level, password],
    );

    return {
      id: user.insertId,
      username,
      classe,
      level,
      password,
    };
  };
}
