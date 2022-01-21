import { SideNavComponent } from './../../components/side-nav/side-nav.component';
import { SharedModule } from './../../../app/modules/shared/shared.module';

import {
  featureUser,
  UserReducer,
} from './../../services/state/user/user.reducer';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import {
  featureData,
  LayoutReducer,
} from 'src/app/services/state/layout/Layout.reducer';
import { SectionComponent } from 'src/app/components/side-nav/components/section/section.component';
import { ProfileSectionComponent } from 'src/app/components/side-nav/components/profile-section/profile-section.component';
import { featureRoute } from 'src/app/services/state/route/route.reducer';
import { routerReducer } from '@ngrx/router-store';

const declarations = [SideNavComponent, ProfileSectionComponent, SectionComponent];
@NgModule({
  declarations: [...declarations],
  imports: [
    SharedModule,
    StoreModule.forFeature(featureUser, UserReducer),
    StoreModule.forFeature(featureData, LayoutReducer),
    StoreModule.forFeature(featureRoute, routerReducer),
  ],
  exports: [...declarations],
})
export class AppLayoutModule {}
