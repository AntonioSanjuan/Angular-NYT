import { SideNavComponent } from './../../components/side-nav/side-nav.component';
import { SharedModule } from './../../../app/modules/shared/shared.module';

import {
  featureUser,
  UserReducer,
} from './../../services/state/user/user.reducer';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import {
  appLayoutData,
  LayoutReducer,
} from 'src/app/services/state/layout/Layout.reducer';

const declarations = [SideNavComponent];
@NgModule({
  declarations: [...declarations],
  imports: [
    SharedModule,
    StoreModule.forFeature(featureUser, UserReducer),
    StoreModule.forFeature(appLayoutData, LayoutReducer),
  ],
  exports: [...declarations],
})
export class AppLayoutModule {}
