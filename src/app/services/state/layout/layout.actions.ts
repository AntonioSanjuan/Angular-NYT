import { createAction } from '@ngrx/store';

export enum AppLayoutActionTypes {
  SwitchIsSideNavOpened = '[Layout] Switch AppLayout isSideNavOpened',
}

export const switchIsSidenavOpenedAction = createAction(
  AppLayoutActionTypes.SwitchIsSideNavOpened
);
