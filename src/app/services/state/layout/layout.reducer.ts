import { setIsSidenavOpenedAction } from './layout.actions';
import { AppLayoutState } from './models/appLayout.state';
import { appLayoutInitialState } from './models/appLayout.initialState';
import { createReducer, on } from '@ngrx/store';

export const appLayoutData = 'layout';

export const LayoutReducer = createReducer<AppLayoutState>(
  appLayoutInitialState,
  on(setIsSidenavOpenedAction, (state, action): AppLayoutState => {
    return {
      ...state,
      isSideNavOpened: action.isSideNavOpened_newState,
    };
  })
);
