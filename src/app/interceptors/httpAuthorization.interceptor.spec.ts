import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { CoreModule } from '../modules/core/core.module';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

describe(`AuthHttpInterceptor`, () => {
  let client: HttpClient;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CoreModule, HttpClientTestingModule],
    });

    httpMock = TestBed.inject(HttpTestingController);
    client = TestBed.inject(HttpClient);
  });

  it('should add an Authorization queryparam', () => {
    client.get('/test').subscribe((response) => {
      expect(response).toBeTruthy();
    });

    httpMock.expectOne(`/test?api-key=${environment.NYT_API_key}`);
  });
});
