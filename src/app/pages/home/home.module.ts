import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsCardComponent } from 'src/app/components/news-card/news-card.component';
import { SkeletonDirective } from 'src/app/directives/skeleton.directive';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { NYTMostPopularService } from 'src/app/services/NYT-data-supplier/most-popular/nyt-most-popular.service';
import { HomeComponent } from './home.component';

const routes: Routes = [{ path: '', component: HomeComponent }];

@NgModule({
  declarations: [HomeComponent, NewsCardComponent, SkeletonDirective],
  providers: [NYTMostPopularService],
  imports: [SharedModule, RouterModule.forChild(routes)],
})
export class HomeModule {}
