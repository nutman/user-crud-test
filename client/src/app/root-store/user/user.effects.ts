import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {ofAction} from 'ngrx-actions/dist';
import {catchError, map, switchMap, take} from 'rxjs/operators';
import {UserService} from '@core/services/user.service';
import {
  CreateUser, CreateUserFail, CreateUserSuccess, DeleteUser, DeleteUserFail, DeleteUserSuccess,
  LoadUsers,
  LoadUsersFail,
  LoadUsersSuccess,
} from '@store/user/user.actions';
import {Store} from '@ngrx/store';

@Injectable()
export class UserEffects {
  constructor(
    private actions$: Actions,
    private store: Store<any>,
    private userService: UserService) {
  }

  @Effect()
  public loadUsers$() {
    return this.actions$
      .pipe(
        ofAction(LoadUsers),
        switchMap(() => this.userService.getUser().pipe(
          map((res) => new LoadUsersSuccess(res)),
          catchError((err) => [new LoadUsersFail(err)])
        )),
      );
  }

  @Effect()
  public createUser$() {
    return this.actions$
      .pipe(
        ofAction(CreateUser),
        switchMap((action) => this.userService.createUser(action.payload).pipe(
          map((res) => {
            this.store.dispatch(new CreateUserSuccess(res));
            return new LoadUsers();
          }),
          catchError((err) => [new CreateUserFail(err)])
        )),
      );
  }

  @Effect()
  public deleteUser$() {
    return this.actions$
      .pipe(
        ofAction(DeleteUser),
        switchMap((action) => this.userService.deleteUser(action.payload).pipe(
          map((res) => {
            this.store.dispatch(new DeleteUserSuccess(res));
            return new LoadUsers();
          }),
          catchError((err) => [new DeleteUserFail(err)])
        )),
      );
  }

}
