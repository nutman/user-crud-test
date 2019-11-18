import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {
  CreateUser, DeleteUser,
  LoadUsers,
  LoadUsersSuccess,
  UserActionTypes
} from '@store/user/user.actions';
import {selectError, selectLoading, selectUsers} from '@store/user/user.selectors';
import {Actions, ofType} from '@ngrx/effects';

@Injectable({
  providedIn: 'root'
})
export class UserStoreFacade {
  constructor(private store: Store<any>, private actions$: Actions) {
  }

  users$ = this.store.select(selectUsers);
  loading$ = this.store.select(selectLoading);
  error$ = this.store.select(selectError);

  public getUser() {
    this.store.dispatch(new LoadUsers());
  }

  public createUser(user: User) {
    this.store.dispatch(new CreateUser(user));
  }

  public deleteUser(id: string) {
    this.store.dispatch(new DeleteUser(id));
  }

  public updateUser(user) {
    this.store.dispatch(new LoadUsersSuccess(user));
  }
}
