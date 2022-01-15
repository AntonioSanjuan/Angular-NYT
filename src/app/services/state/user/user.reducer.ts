import { setUser, unsetUser } from './user.actions';
import { createReducer, on } from '@ngrx/store';
import { appUserInitialState } from './models/appUser.initialState';
import { AppUserState } from './models/appUser.state';

export const featureUser = 'user';

export const UserReducer = createReducer<AppUserState>(
  appUserInitialState,

  on(unsetUser, (state): AppUserState => {
    return {
      ...state,
      isLogged: appUserInitialState.isLogged,
      userData: appUserInitialState.userData
    };
  }),

  on(setUser, (state, action): AppUserState => {
    return {
      ...state,
      isLogged: true,
      userData: action.user_newState,
    };
  })
);
