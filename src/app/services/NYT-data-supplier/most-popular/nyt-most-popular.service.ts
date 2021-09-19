import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { DataSupplierServicesNames } from 'src/app/helpers/dataSupplierNameHelper/dataSupplierNameHelper';
import { MostPopularViewedArticlesResponseDto } from 'src/app/models/dtos/mostPopularViewedArticles/mostPopularViewedArticlesResponseDto.model';

@Injectable()
export class NYTMostPopularService {
  private baseUrl = environment.API_BASE_URL;

  private nytMostPopularNameHelper: DataSupplierServicesNames;

  constructor(private http: HttpClient) {
    this.nytMostPopularNameHelper = new DataSupplierServicesNames(this.baseUrl);
  }

  public async getMostPopularViewedArticles(
    periodOfTime: number
  ): Promise<MostPopularViewedArticlesResponseDto> {
    const getMostPopularViewedArticlesUrl =
      this.nytMostPopularNameHelper.nytMosPopular.getMostPopularViewedArticlesUrl(
        periodOfTime
      );

    return await this.http
      .get<MostPopularViewedArticlesResponseDto>(
        getMostPopularViewedArticlesUrl
      )
      .toPromise();
  }
}
