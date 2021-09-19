import { Component, Input } from '@angular/core';
import { MostPopularViewedArticlesResponseContentDto } from 'src/app/models/dtos/mostPopularViewedArticles/mostPopularViewedArticlesResponseDto.model';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.scss'],
})
export class NewsCardComponent {
  @Input() public news: MostPopularViewedArticlesResponseContentDto;

  public hasImage(): boolean {
    return !!this.news?.media[0];
  }

  public getImage(): string {
    const mediaMetadataIndex = this.news?.media[0]['media-metadata'].length - 1;

    return this.news?.media[0]['media-metadata'][mediaMetadataIndex].url;
  }
}
