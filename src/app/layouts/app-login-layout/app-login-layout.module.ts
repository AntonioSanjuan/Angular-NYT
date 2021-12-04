import {
  featureUser,
  UserReducer,
} from '../../services/state/user/user.reducer';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from '../../modules/shared/shared.module';

@NgModule({
  declarations: [],
  imports: [SharedModule, StoreModule.forFeature(featureUser, UserReducer)],
  exports: [],
})
export class AppLoginLayoutModule {}
