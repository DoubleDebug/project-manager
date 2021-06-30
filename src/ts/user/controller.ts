import { UserModel } from './model';
import { UserView } from './view';

export class User {
  public model: UserModel;
  public view: UserView;

  constructor(id: number, nickname: string, password: string) {
    this.model = new UserModel(id, nickname, password);
    this.view = new UserView();
  }
}
