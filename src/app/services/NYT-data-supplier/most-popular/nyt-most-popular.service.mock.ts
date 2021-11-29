import { MostPopularViewedArticlesResponseDto } from 'src/app/models/dtos/mostPopularViewedArticles/mostPopularViewedArticlesResponseDto.model';

export const NYTMostPopularServiceMock = {
  getMostPopularViewedArticles: jest.fn(() =>
    new Promise((resolve) => resolve({})).then(
      () => mostPopularViewedArticlesResponseDtoMock
    )
  ),
};

const mostPopularViewedArticlesResponseDtoMock = {
  results: [
    {
      media: [],
    },
  ],
} as MostPopularViewedArticlesResponseDto;
