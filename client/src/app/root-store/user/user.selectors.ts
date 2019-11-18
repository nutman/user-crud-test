import { createFeatureSelector, createSelector } from '@ngrx/store';
import {UsersState} from '@store/user/user.reducer';

export const userFeatureSelector = createFeatureSelector('user');

export const selectUsers = createSelector(
  userFeatureSelector,
  (state: UsersState) => state.users
);

export const selectLoading = createSelector(
  userFeatureSelector,
  (state: UsersState) => state.loading
);

export const selectError = createSelector(
  userFeatureSelector,
  (state: UsersState) => state.error
);
