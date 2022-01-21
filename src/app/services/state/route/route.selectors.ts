import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppRouteState } from './models/appRoute.state';
import { RouterReducerState } from "@ngrx/router-store";
import { featureRoute } from './route.reducer';

// feature selector
export const selectRouteState =
  createFeatureSelector<RouterReducerState<AppRouteState>>(featureRoute);

// child selector
export const getRouteInfo = createSelector(
  selectRouteState,
  state => state.state
);
