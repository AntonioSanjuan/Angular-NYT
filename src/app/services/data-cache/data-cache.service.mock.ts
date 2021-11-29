import { of } from 'rxjs';
import { MostPopularViewedArticlesResponseDto } from 'src/app/models/dtos/mostPopularViewedArticles/mostPopularViewedArticlesResponseDto.model';

// eslint-disable-next-line prefer-const
export let DataCacheServiceMock = {
  mostPopularViewedArticles$: jest.fn(() => {
    return of(undefined);
  }),

  // getter/setter
  mostPopularViewedArticles: {} as MostPopularViewedArticlesResponseDto,
};
