import { Component, OnInit } from '@angular/core';
import { MostPopularViewedArticlesResponseDto } from 'src/app/models/dtos/mostPopularViewedArticles/mostPopularViewedArticlesResponseDto.model';
import { DataCacheService } from 'src/app/services/data-cache/data-cache.service';
import { NYTMostPopularService } from 'src/app/services/NYT-data-supplier/most-popular/nyt-most-popular.service';

enum PeriodOfTimes {
  Daily = 1,
  Weekly = 7,
  Monthly = 30,
}
@Component({
  selector: 'app-mostPopularArticles',
  templateUrl: './mostPopularArticles.component.html',
  styleUrls: ['./mostPopularArticles.component.scss'],
})
export class MostPopularArticlesComponent implements OnInit {
  nytMostPopularViewedArticles: MostPopularViewedArticlesResponseDto = {
    results: Array(20).fill(undefined),
  } as MostPopularViewedArticlesResponseDto;

  public selectedPeriodOfTime = PeriodOfTimes.Daily;
  public periodOfTimes = PeriodOfTimes;

  constructor(
    private nytMostPopularService: NYTMostPopularService,
    private dataCacheService: DataCacheService
  ) {}

  async ngOnInit() {
    await this.fetchData();
  }

  public async fetchData(): Promise<void> {
    this.setEmptyArticles();
    await this.fetchMostPopularViewedArticles();
  }

  private async fetchMostPopularViewedArticles(): Promise<void> {
    this.nytMostPopularViewedArticles =
      await this.nytMostPopularService.getMostPopularViewedArticles(
        this.selectedPeriodOfTime
      );
    this.nytMostPopularViewedArticles.results.unshift(undefined);
    this.dataCacheService.mostPopularViewedArticles =
      this.nytMostPopularViewedArticles;
  }

  private setEmptyArticles() {
    this.nytMostPopularViewedArticles = {
      results: Array(20).fill(undefined),
    } as MostPopularViewedArticlesResponseDto;
  }
}
