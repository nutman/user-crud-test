import { Action } from '@ngrx/store';

export enum UserActionTypes {
  LOAD_USERS = '[User] Load Users',
  LOAD_USERS_SUCCESS = '[User] Load Users Success',
  LOAD_USERS_FAIL = '[User] Load Users Fail',
  CREATE_USER = '[User] Create User',
  CREATE_USER_SUCCESS = '[User] Create User Success',
  CREATE_USER_FAIL = '[User] Create User Fail',
  DELETE_USER = '[User] Delete User',
  DELETE_USER_SUCCESS = '[User] Delete User Success',
  DELETE_USER_FAIL = '[User] Delete User Fail',
}

export class LoadUsers implements Action {
  readonly type = UserActionTypes.LOAD_USERS;
}

export class LoadUsersSuccess implements Action {
  readonly type = UserActionTypes.LOAD_USERS_SUCCESS;

  constructor(public payload: User) {
  }
}

export class LoadUsersFail implements Action {
  readonly type = UserActionTypes.LOAD_USERS_FAIL;

  constructor(public payload: any) {
  }
}

export class CreateUser implements Action {
  readonly type = UserActionTypes.CREATE_USER;

  constructor(public payload: User) {
  }
}

export class CreateUserSuccess implements Action {
  readonly type = UserActionTypes.CREATE_USER_SUCCESS;

  constructor(public payload: User) {
  }
}

export class CreateUserFail implements Action {
  readonly type = UserActionTypes.CREATE_USER_FAIL;

  constructor(public payload: any) {
  }
}

export class DeleteUser implements Action {
  readonly type = UserActionTypes.DELETE_USER;

  constructor(public payload: string) {
  }
}

export class DeleteUserSuccess implements Action {
  readonly type = UserActionTypes.DELETE_USER_SUCCESS;

  constructor(public payload: User) {
  }
}

export class DeleteUserFail implements Action {
  readonly type = UserActionTypes.DELETE_USER_FAIL;

  constructor(public payload: any) {
  }
}
