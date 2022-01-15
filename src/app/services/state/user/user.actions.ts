import { createAction, props } from '@ngrx/store';
import { UserResponseDto } from 'src/app/models/dtos/user/userData.model';

export enum AppUserActionTypes {
  UnsetUser = '[User] Unset User',
  SetUser = '[User] Set User',
}

export const unsetUser = createAction(
  AppUserActionTypes.UnsetUser,
);

export const setUser = createAction(
  AppUserActionTypes.SetUser,
  props<{
    user_newState: UserResponseDto;
  }>()
);
