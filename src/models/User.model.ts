import { ResultSetHeader } from 'mysql2/promise';
import connection from './connection';
import IUser from '../interfaces/User.interface';
import ILogin from '../interfaces/Login.interface';

type User = {
  username: string;
  classe: string;
  level: number;
  password: string;
};

export default class UserModel {
  public getByUserName = async (
    userName: string,
    password: string,
  ): Promise<ILogin[]> => {
    const [user] = await connection.execute(
      'SELECT id, username, password FROM Trybesmith.Users WHERE username = ? and password = ?',
      [userName, password],
    );
    return user as ILogin[];
  };

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
