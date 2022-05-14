import IUser from '../../interfaces/User.interface';
import UserModel from '../models/User.model';

type User = {
  username: string;
  classe: string;
  level: number;
  password: string;
};

export default class UserService {
  public model = new UserModel();

  public create = async ({ username, classe, level, password }: User): Promise<IUser> => {
    const user = await this.model.create({ username, classe, level, password });

    return user;
  };
}
