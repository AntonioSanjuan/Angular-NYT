import { setIsAnonymousAction } from './user.actions';
import { createReducer, on } from '@ngrx/store';
import { appUserInitialState } from './models/appUser.initialState';
import { AppUserState } from './models/appUsera.state';

export const UserReducer = createReducer<AppUserState>(
  appUserInitialState,
  on(setIsAnonymousAction, (state, action): AppUserState => {
    return {
      ...state,
      isAnonymous: action.isAnonymous_newState,
    };
  })
);
