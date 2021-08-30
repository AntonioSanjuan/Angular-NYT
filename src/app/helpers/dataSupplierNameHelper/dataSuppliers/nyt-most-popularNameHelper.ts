import { NYTMostPopularNames } from 'src/app/models/internal/data-supplier/NYTMostPopularNames';

export class NYTMostPopularNameHelper {
  protected baseUrl: string;
  protected controllerSuburl = 'svc/mostpopular/';

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl + this.controllerSuburl;
  }

  getMostPopularViewedArticlesUrl(periodOfTime: number): string {
    let url = this.baseUrl + NYTMostPopularNames.MostPopularViewedArticles;
    return url.replace('{period}', periodOfTime.toString());
  }
}
