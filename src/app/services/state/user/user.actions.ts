import { createAction, props } from '@ngrx/store';

export enum AppUserActionTypes {
  SetIsAnonymous = '[User] Set AppUser isAnonymous',
}

export const setIsAnonymousAction = createAction(
  AppUserActionTypes.SetIsAnonymous,
  props<{
    isAnonymous_newState: boolean;
  }>()
);
