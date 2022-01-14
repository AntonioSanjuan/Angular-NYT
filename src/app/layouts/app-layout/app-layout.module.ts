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
import { SectionComponent } from 'src/app/components/side-nav/components/section/section.component';
import { ProfileSectionComponent } from 'src/app/components/side-nav/components/profile-section/profile-section.component';

const declarations = [SideNavComponent, ProfileSectionComponent, SectionComponent];
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
