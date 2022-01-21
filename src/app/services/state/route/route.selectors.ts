import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppRouteState } from './models/appRoute.state';
import { RouterReducerState } from "@ngrx/router-store";
import { routeData } from './route.reducer';

// feature selector
export const selectRouteState =
  createFeatureSelector<RouterReducerState<AppRouteState>>(routeData);

// child selector
export const getRouteInfo = createSelector(
  selectRouteState,
  state => state.state
);
