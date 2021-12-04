import { SharedModule } from './../../../app/modules/shared/shared.module';

import {
  featureUser,
  UserReducer,
} from './../../services/state/user/user.reducer';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [],
  imports: [SharedModule, StoreModule.forFeature(featureUser, UserReducer)],
  exports: [],
})
export class AppLayoutModule {}
