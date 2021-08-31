import { NgModule } from '@angular/core';
import { TopNavComponent } from 'src/app/components/top-nav/top-nav.component';
import { SharedModule } from 'src/app/modules/shared/shared.module';

const declarations = [TopNavComponent];

@NgModule({
  declarations: [...declarations],
  imports: [SharedModule],
  exports: [...declarations],
})
export class AppLayoutModule {}
