import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { MostPopularViewedArticlesResponseDto } from 'src/app/models/dtos/mostPopularViewedArticles/mostPopularViewedArticlesResponseDto.model';

@Injectable()
export class DataCacheService {
  private mostPopularViewedArticlesObj: MostPopularViewedArticlesResponseDto =
    undefined;

  private mostPopularViewedArticlesObj$ =
    new BehaviorSubject<MostPopularViewedArticlesResponseDto>(
      this.mostPopularViewedArticlesObj
    );

  public get mostPopularViewedArticles(): MostPopularViewedArticlesResponseDto {
    return this.mostPopularViewedArticlesObj;
  }

  public set mostPopularViewedArticles(
    mostPopularViewedArticles: MostPopularViewedArticlesResponseDto
  ) {
    this.mostPopularViewedArticlesObj = mostPopularViewedArticles;
    this.mostPopularViewedArticlesObj$.next(this.mostPopularViewedArticlesObj);
  }

  public mostPopularViewedArticles$(): Observable<MostPopularViewedArticlesResponseDto> {
    return this.mostPopularViewedArticlesObj$.asObservable();
  }
}
