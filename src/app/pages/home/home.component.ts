import { Component, OnInit } from '@angular/core';
import { MostPopularViewedArticlesResponseDto } from 'src/app/models/dtos/mostPopularViewedArticles/mostPopularViewedArticlesResponseDto.model';
import { NYTMostPopularService } from 'src/app/services/NYT-data-supplier/most-popular/nyt-most-popular.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private nytMostPopularService: NYTMostPopularService) {}

  nytMostPopularViewedArticles: MostPopularViewedArticlesResponseDto;

  ngOnInit() {
    this.fetchMostPopularViewedArticles(1);
  }

  private async fetchMostPopularViewedArticles(periodOfTime: number) {
    this.nytMostPopularViewedArticles =
      await this.nytMostPopularService.getMostPopularViewedArticles(
        periodOfTime
      );
    console.log(
      'this.nytMostPopularViewedArticles',
      this.nytMostPopularViewedArticles
    );
  }
}
