import UserModel from '../models/User.model';
import CustonError from '../util/errorFunc';
import AuthUser from '../auth/AuthenticationUser';

export default class Login {
  public model = new UserModel();

  auth = new AuthUser();

  public login = async (username: string, password: string) => {
    const userResult = await this.model.getByUserName(username, password);
    if (userResult.length === 0) throw new CustonError(401, 'Username or password invalid');
    
    const token = this.auth.createToken(userResult[0]);
    
    return token;
  };
}