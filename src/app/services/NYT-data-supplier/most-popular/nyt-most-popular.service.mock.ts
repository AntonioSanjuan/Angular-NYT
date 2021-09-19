export const NYTMostPopularServiceMock = {
  getMostPopularViewedArticles: jest.fn(() =>
    new Promise((resolve) => resolve({})).then(() => undefined)
  ),
};
