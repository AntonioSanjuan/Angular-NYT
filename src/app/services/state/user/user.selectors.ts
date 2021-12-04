import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppUserState } from './models/appUser.state';
import { featureUser } from './user.reducer';

// feature selector
export const selectUserState = createFeatureSelector<AppUserState>(featureUser);

// child selector
export const selectUserData = createSelector(
  selectUserState,
  (state) => state.userData
);

export const selectUserIsLogged = createSelector(
  selectUserState,
  (state) => state.isLogged
);
