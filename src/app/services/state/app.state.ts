import { AppDataState } from './data/models/appData.state';
import { AppUserState } from './user/models/appUser.state';

export interface AppState {
  user: AppUserState;
  data: AppDataState;
}
