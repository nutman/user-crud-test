import {Injectable} from '@angular/core';
import {UserHttpService} from '@core/http-services/user-http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private userHttp: UserHttpService) {
  }

  public getUser() {
    return this.userHttp.getUsers();
  }

  public createUser(user: User) {
    return this.userHttp.createUser(user);
  }

  public deleteUser(id: string) {
    return this.userHttp.deleteUser(id);
  }
}
