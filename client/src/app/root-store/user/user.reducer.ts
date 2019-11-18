import { Action, createReducer, Store } from 'ngrx-actions/dist';
import {
  LoadUsers,
  LoadUsersFail,
  LoadUsersSuccess,
  CreateUser,
  CreateUserFail,
  CreateUserSuccess,
  DeleteUser,
  DeleteUserFail,
  DeleteUserSuccess,
} from '@store/user/user.actions';

export interface UsersState {
  users: User[];
  error: any;
  loading: boolean;
}

export const userInitialState: UsersState = {
  users: [],
  error: null,
  loading: false,
};

type triggerTypes = LoadUsers;
type failTypes = CreateUserFail | DeleteUserFail;

@Store(userInitialState)
export class UserReducer {

  @Action(LoadUsers)
  public load(state: UsersState, action: triggerTypes) {
    return {
      ...state,
      loading: true,
      error: null
    };
  }

  @Action(CreateUser)
  public createUser(state: UsersState, action: CreateUser) {
    return {
      ...state,
      user: action.payload,
      loading: true,
      error: null
    };
  }

  @Action(DeleteUser)
  public deleteUser(state: UsersState, action: DeleteUser) {
    return {
      ...state,
      id: action.payload,
      loading: true,
      error: null
    };
  }

  @Action(LoadUsersFail, CreateUserFail, DeleteUserFail)
  public error(state: UsersState, action: failTypes) {
    return {...state, error: action.payload, loading: false};
  }

  @Action(LoadUsersSuccess)
  public loadUserSuccess(state: UsersState, action: LoadUsersSuccess) {
    return {...state, users: action.payload, loading: false};
  }

  @Action(CreateUserSuccess)
  public createUserSuccess(state: UsersState, action: LoadUsersSuccess) {
    return {...state, loading: false};
  }

  @Action(DeleteUserSuccess)
  public deleteUserSuccess(state: UsersState, action: LoadUsersSuccess) {
    return {...state, loading: false};
  }
}

export function userReducer(state, action) {
  return createReducer(UserReducer)(state, action);
}
