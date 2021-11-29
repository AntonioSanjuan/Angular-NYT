import {
  featureUser,
  UserReducer,
} from './../../services/state/user/user.reducer';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { TopNavComponent } from 'src/app/components/top-nav/top-nav.component';
import { SharedModule } from 'src/app/modules/shared/shared.module';

const declarations = [TopNavComponent];

@NgModule({
  declarations: [...declarations],
  imports: [SharedModule, StoreModule.forFeature(featureUser, UserReducer)],
  exports: [...declarations],
})
export class AppLayoutModule {}
