export const NYTMostPopularServiceMock = {
  fetchMostPopularViewedArticles: jest.fn(() =>
    new Promise((resolve, reject) => resolve({})).then(() => undefined)
  ),
};
