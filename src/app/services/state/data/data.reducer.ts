import { appDataInitialState } from './models/appData.initialState';
import { AppDataState } from './models/appData.state';
import { createReducer, on } from '@ngrx/store';
import { setMostPopularViewedArticlesAction } from './data.actions';

export const featureName = 'data';

export const DataReducer = createReducer<AppDataState>(
  appDataInitialState,
  on(setMostPopularViewedArticlesAction, (state, action): AppDataState => {
    return {
      ...state,
      mostPopularViewedArticles: action.mostPopularViewedArticles_newState,
    };
  })
);
