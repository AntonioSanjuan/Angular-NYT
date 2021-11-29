import { AppDataState } from './data/data.actions';
import { AppUserState } from './user/models/appUsera.state';

export interface AppState {
  user: AppUserState;
  data: AppDataState;
}
