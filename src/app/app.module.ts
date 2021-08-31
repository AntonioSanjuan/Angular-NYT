import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { APP_ROUTES } from './modules/routing/routing.module';
import { AppLayoutComponent } from './layouts/app-layout/app-layout.component';
import { CoreModule } from './modules/core/core.module';
import { AppLayoutModule } from './layouts/app-layout/app-layout.module';

@NgModule({
  declarations: [AppComponent, AppLayoutComponent],
  imports: [CoreModule, AppLayoutModule, APP_ROUTES],
  bootstrap: [AppComponent],
})
export class AppModule {}
