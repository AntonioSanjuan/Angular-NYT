import { createAction, props } from '@ngrx/store';

export enum AppLayoutActionTypes {
  SetIsSideNavOpened = '[Layout] Set AppLayout isSideNavOpened',
}

export const setIsSidenavOpenedAction = createAction(
  AppLayoutActionTypes.SetIsSideNavOpened,
  props<{
    isSideNavOpened_newState: boolean;
  }>()
);
