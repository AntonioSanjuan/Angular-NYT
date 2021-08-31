import { Component, Input } from '@angular/core';
import { MostPopularViewedArticlesResponseContentDto } from 'src/app/models/dtos/mostPopularViewedArticles/mostPopularViewedArticlesResponseDto.model';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.scss'],
})
export class NewsCardComponent {
  @Input() public news: MostPopularViewedArticlesResponseContentDto;
}
