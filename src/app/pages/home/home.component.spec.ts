import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewsCardComponent } from 'src/app/components/news-card/news-card.component';
import { NYTMostPopularService } from 'src/app/services/NYT-data-supplier/most-popular/nyt-most-popular.service';
import { NYTMostPopularServiceMock } from 'src/app/services/NYT-data-supplier/most-popular/nyt-most-popular.service.mock';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent, NewsCardComponent],
      providers: [
        { provide: NYTMostPopularService, useValue: NYTMostPopularServiceMock },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
