import { AppLayoutState } from './models/appLayout.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { featureData } from './Layout.reducer';

// feature selector
export const selectLayoutState =
  createFeatureSelector<AppLayoutState>(featureData);

// child selector
export const selectIsSideNavOpened = createSelector(
  selectLayoutState,
  (state) => state.isSideNavOpened
);
