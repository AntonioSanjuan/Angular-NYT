import { AppLayoutState } from './models/appLayout.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { appLayoutData } from './Layout.reducer';

// feature selector
export const selectLayoutState =
  createFeatureSelector<AppLayoutState>(appLayoutData);

// child selector
export const selectIsSideNavOpened = createSelector(
  selectLayoutState,
  (state) => state.isSideNavOpened
);
