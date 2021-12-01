import { AppDataState } from './../../services/state/data/models/appData.state';
import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { MostPopularViewedArticlesResponseDto } from 'src/app/models/dtos/mostPopularViewedArticles/mostPopularViewedArticlesResponseDto.model';
import { NYTMostPopularService } from 'src/app/services/NYT-data-supplier/most-popular/nyt-most-popular.service';
import { setMostPopularViewedArticlesAction } from 'src/app/services/state/data/data.actions';
import { selectMostPopularViewedArticles } from 'src/app/services/state/data/data.selectors';

enum PeriodOfTimes {
  Daily = 1,
  Weekly = 7,
  Monthly = 30,
}
@Component({
  selector: 'app-most-popular-articles',
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
    private store: Store<AppDataState>
  ) {}

  async ngOnInit(): Promise<void> {
    this.store
      .pipe(select(selectMostPopularViewedArticles))
      .subscribe((response: MostPopularViewedArticlesResponseDto) => {
        this.nytMostPopularViewedArticles = response;
      });
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
    console.log(this.nytMostPopularViewedArticles);

    this.addEmptyArticle();
    this.storeData();
  }

  private addEmptyArticle(): void {
    if (this.nytMostPopularViewedArticles.results) {
      this.nytMostPopularViewedArticles.results.unshift(undefined);
    }
  }

  private storeData(): void {
    this.store.dispatch(
      setMostPopularViewedArticlesAction({
        mostPopularViewedArticles_newState: this.nytMostPopularViewedArticles,
      })
    );
  }

  private setEmptyArticles(): void {
    this.nytMostPopularViewedArticles = {
      results: Array(20).fill(undefined),
    } as MostPopularViewedArticlesResponseDto;
  }
}
