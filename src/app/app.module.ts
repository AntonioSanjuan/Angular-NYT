import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { APP_ROUTES } from './modules/routing/routing.module';
import { AppLayoutComponent } from './layouts/app-layout/app-layout.component';
import { CoreModule } from './modules/core/core.module';

@NgModule({
  declarations: [AppComponent, AppLayoutComponent],
  imports: [CoreModule, APP_ROUTES],
  bootstrap: [AppComponent],
})
export class AppModule {}
