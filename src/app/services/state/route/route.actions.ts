import { createAction } from '@ngrx/store';

export enum AppRouteActionTypes {
  Navigate = '[Route] Add AppRoute navigation state',
}

export const routeStoreNavigationAction = createAction(
  AppRouteActionTypes.Navigate,
);
