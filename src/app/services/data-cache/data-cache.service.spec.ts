import { TestBed } from '@angular/core/testing';
import { MostPopularViewedArticlesResponseDto } from 'src/app/models/dtos/mostPopularViewedArticles/mostPopularViewedArticlesResponseDto.model';

import { DataCacheService } from './data-cache.service';

describe('DataCacheService', () => {
  let service: DataCacheService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataCacheService],
    });
    service = TestBed.inject(DataCacheService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('get should return undefined initially', () => {
    expect(service.mostPopularViewedArticles).toBeUndefined;
  });

  it('set should allow to get these value later', () => {
    const sut = {} as MostPopularViewedArticlesResponseDto;
    service.mostPopularViewedArticles = sut;

    expect(service.mostPopularViewedArticles).toEqual(sut);
  });
});
