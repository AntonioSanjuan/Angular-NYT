import { setIsLoggedAction, setUser } from './user.actions';
import { createReducer, on } from '@ngrx/store';
import { appUserInitialState } from './models/appUser.initialState';
import { AppUserState } from './models/appUser.state';

export const featureUser = 'user';

export const UserReducer = createReducer<AppUserState>(
  appUserInitialState,

  on(setIsLoggedAction, (state, action): AppUserState => {
    return {
      ...state,
      isLogged: action.isLogged_newState,
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
