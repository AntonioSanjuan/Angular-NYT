import { Component, OnInit } from '@angular/core';
import { MostPopularViewedArticlesResponseDto } from 'src/app/models/dtos/mostPopularViewedArticles/mostPopularViewedArticlesResponseDto.model';
import { DataCacheService } from 'src/app/services/data-cache/data-cache.service';
import { NYTMostPopularService } from 'src/app/services/NYT-data-supplier/most-popular/nyt-most-popular.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  nytMostPopularViewedArticles: MostPopularViewedArticlesResponseDto = {
    results: Array(20).fill(undefined),
  } as MostPopularViewedArticlesResponseDto;

  constructor(
    private nytMostPopularService: NYTMostPopularService,
    private dataCacheService: DataCacheService
  ) {}

  async ngOnInit() {
    this.fetchMostPopularViewedArticles(1);
    this.dataCacheService
      .mostPopularViewedArticles$()
      .subscribe((mostPopularViewedArticles) => {
        console.log('mostPopularViewedArticles', mostPopularViewedArticles);
      });
  }

  private async fetchMostPopularViewedArticles(periodOfTime: number) {
    this.nytMostPopularViewedArticles =
      await this.nytMostPopularService.getMostPopularViewedArticles(
        periodOfTime
      );
    this.nytMostPopularViewedArticles.results.unshift(undefined);
    this.dataCacheService.mostPopularViewedArticles =
      this.nytMostPopularViewedArticles;
  }
}
