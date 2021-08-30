import { TestBed } from '@angular/core/testing';

import { NYTMostPopularService } from './nyt-most-popular.service';

describe('NYTMostPopularService', () => {
  let service: NYTMostPopularService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NYTMostPopularService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
