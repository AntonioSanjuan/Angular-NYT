import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Subject } from 'rxjs';
import { MostPopularViewedArticlesResponseDto } from 'src/app/models/dtos/mostPopularViewedArticles/mostPopularViewedArticlesResponseDto.model';
import { CoreModule } from 'src/app/modules/core/core.module';
import { DataCacheService } from 'src/app/services/data-cache/data-cache.service';
import { DataCacheServiceMock } from 'src/app/services/data-cache/data-cache.service.mock';
import { NYTMostPopularService } from 'src/app/services/NYT-data-supplier/most-popular/nyt-most-popular.service';
import { NYTMostPopularServiceMock } from 'src/app/services/NYT-data-supplier/most-popular/nyt-most-popular.service.mock';
import { MostPopularArticlesComponent } from './mostPopularArticles.component';
import { HomeModule } from './mostPopularArticles.module';

describe('MostPopularArticlesComponent', () => {
  let component: MostPopularArticlesComponent;
  let fixture: ComponentFixture<MostPopularArticlesComponent>;

  let dataService: DataCacheService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoreModule, HomeModule],
      providers: [
        { provide: NYTMostPopularService, useValue: NYTMostPopularServiceMock },
        { provide: DataCacheService, useValue: DataCacheServiceMock },
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(MostPopularArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    dataService = TestBed.inject(DataCacheService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('MostPopularArticlesComponent initially must request mostPopularViewedArticles page 1', () => {
    const sut = 1;
    // spy
    const fetchSpy = jest
      .spyOn(NYTMostPopularServiceMock, 'getMostPopularViewedArticles')
      .mockResolvedValue({});

    component.ngOnInit().then(() => {
      expect(fetchSpy).toHaveBeenCalledWith(sut);
    });
  });

  it('MostPopularArticlesComponent initially must save mostPopularViewedArticles page 1 in the data-cache service', () => {
    const sut = {
      results: Array(20).fill(undefined),
    } as MostPopularViewedArticlesResponseDto;
    // spy
    jest
      .spyOn(NYTMostPopularServiceMock, 'getMostPopularViewedArticles')
      .mockResolvedValue(sut);

    fixture.detectChanges;
    component.ngOnInit().then(() => {
      expect(component.nytMostPopularViewedArticles).toEqual(sut);
      expect(dataService.mostPopularViewedArticles).toEqual(sut);
      console.log('eeeepa', dataService.mostPopularViewedArticles);
    });
  });

  it('MostPopularArticlesComponent initially must save mostPopularViewedArticles$ subscription', () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const subject: Subject<MostPopularViewedArticlesResponseDto> =
      new Subject();

    jest
      .spyOn(dataService, 'mostPopularViewedArticles$')
      .mockReturnValue(subject.asObservable());

    component.ngOnInit().then(() => {
      subject.next({ results: [] } as MostPopularViewedArticlesResponseDto);
      fixture.detectChanges();
    });
  });
});
