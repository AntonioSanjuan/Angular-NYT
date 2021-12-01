import { LoginComponent } from './login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import {
  featureUser,
  UserReducer,
} from 'src/app/services/state/user/user.reducer';

const routes: Routes = [{ path: '', component: LoginComponent }];

@NgModule({
  declarations: [LoginComponent],
  providers: [],
  imports: [
    SharedModule,
    StoreModule.forFeature(featureUser, UserReducer),
    RouterModule.forChild(routes),
  ],
  exports: [SharedModule],
})
export class LoginModule {}
