import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsCardComponent } from 'src/app/components/news-card/news-card.component';
import { SkeletonDirective } from 'src/app/directives/skeleton.directive';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { DataCacheService } from 'src/app/services/data-cache/data-cache.service';
import { NYTMostPopularService } from 'src/app/services/NYT-data-supplier/most-popular/nyt-most-popular.service';
import { MostPopularArticlesComponent } from './mostPopularArticles.component';

const routes: Routes = [{ path: '', component: MostPopularArticlesComponent }];

@NgModule({
  declarations: [
    MostPopularArticlesComponent,
    NewsCardComponent,
    SkeletonDirective,
  ],
  providers: [NYTMostPopularService, DataCacheService],
  imports: [SharedModule, RouterModule.forChild(routes)],
  exports: [SharedModule],
})
export class HomeModule {}
