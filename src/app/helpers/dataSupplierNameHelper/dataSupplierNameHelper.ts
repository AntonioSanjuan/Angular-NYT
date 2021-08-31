import { NYTMostPopularNameHelper } from './dataSuppliers/nyt-most-popularNameHelper';

export class DataSupplierServicesNames {
  nytMosPopular: NYTMostPopularNameHelper;

  constructor(baseUrl: string) {
    this.nytMosPopular = new NYTMostPopularNameHelper(baseUrl);
  }
}
