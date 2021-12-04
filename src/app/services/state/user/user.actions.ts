import { createAction, props } from '@ngrx/store';
import { UserResponseDto } from 'src/app/models/dtos/user/userData.model';

export enum AppUserActionTypes {
  SetIsAnonymous = '[User] Set AppUser isAnonymous',
  SetUser = '[User] Set User',
}

export const setIsLoggedAction = createAction(
  AppUserActionTypes.SetIsAnonymous,
  props<{
    isLogged_newState: boolean;
  }>()
);

export const setUser = createAction(
  AppUserActionTypes.SetUser,
  props<{
    user_newState: UserResponseDto;
  }>()
);
