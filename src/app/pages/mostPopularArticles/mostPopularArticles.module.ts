import { featureData } from './../../services/state/data/data.reducer';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { NewsCardComponent } from 'src/app/components/news-card/news-card.component';
import { SkeletonDirective } from 'src/app/directives/skeleton.directive';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { NYTMostPopularService } from 'src/app/services/NYT-data-supplier/most-popular/nyt-most-popular.service';
import { DataReducer } from 'src/app/services/state/data/data.reducer';
import { MostPopularArticlesComponent } from './mostPopularArticles.component';

const routes: Routes = [{ path: '', component: MostPopularArticlesComponent }];

@NgModule({
  declarations: [
    MostPopularArticlesComponent,
    NewsCardComponent,
    SkeletonDirective,
  ],
  providers: [NYTMostPopularService],
  imports: [
    SharedModule,
    StoreModule.forFeature(featureData, DataReducer),
    RouterModule.forChild(routes),
  ],
  exports: [SharedModule],
})
export class HomeModule {}
