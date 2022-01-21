import { UserReducer } from './user/user.reducer';
import { AppLayoutState } from 'src/app/services/state/layout/models/appLayout.state';
import { AppDataState } from './data/models/appData.state';
import { AppUserState } from './user/models/appUser.state';
import { DataReducer } from './data/data.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { LayoutReducer } from './layout/Layout.reducer';
import { AppRouteState } from './route/models/appRoute.state';
import { RouterReducerState, routerReducer } from "@ngrx/router-store";

export const featureApp = 'app';

export interface AppState {
  app: AppRootState;
}

export interface AppRootState {
  user: AppUserState;
  data: AppDataState;
  layout: AppLayoutState;
  route: RouterReducerState<AppRouteState>;
}

export const AppReducers = {
  user: UserReducer,
  data: DataReducer,
  layout: LayoutReducer,
  route: routerReducer

};

export const selecAppState = createFeatureSelector<AppRootState>(featureApp);

export const selectUserState = createSelector(
  selecAppState,
  (state: AppRootState) => state.user
);

export const selectDataState = createSelector(
  selecAppState,
  (state: AppRootState) => state.data
);

export const selectLayoutState = createSelector(
  selecAppState,
  (state: AppRootState) => state.layout
);

export const selectRouteState = createSelector(
  selecAppState,
  (state: AppRootState) => state.route
);
