import { featureName } from './data.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppDataState } from './models/appData.state';

//feature selector
export const selectDataState = createFeatureSelector<AppDataState>(featureName);

//child selector
export const selectMostPopularViewedArticles = createSelector(
  selectDataState,
  (state) => state.mostPopularViewedArticles
);
