import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MostPopularViewedArticlesResponseDto } from 'src/app/models/dtos/mostPopularViewedArticles/mostPopularViewedArticlesResponseDto.model';
import { CoreModule } from 'src/app/modules/core/core.module';
import { NYTMostPopularService } from 'src/app/services/NYT-data-supplier/most-popular/nyt-most-popular.service';
import { NYTMostPopularServiceMock } from 'src/app/services/NYT-data-supplier/most-popular/nyt-most-popular.service.mock';
import { MostPopularArticlesComponent } from './mostPopularArticles.component';
import { MostPopularArticlesModule } from './mostPopularArticles.module';
import { Store } from '@ngrx/store';
import { StoreMock } from 'src/app/services/state/utils/store.mock';
import { Subject } from 'rxjs';

describe('MostPopularArticlesComponent', () => {
  let component: MostPopularArticlesComponent;
  let fixture: ComponentFixture<MostPopularArticlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoreModule, MostPopularArticlesModule],
      providers: [
        { provide: NYTMostPopularService, useValue: NYTMostPopularServiceMock },
        { provide: Store, useValue: StoreMock },
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(MostPopularArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('MostPopularArticlesComponent initially must request mostPopularViewedArticles first page', () => {
    const input = 1;
    // spy
    const fetchSpy = jest.spyOn(
      NYTMostPopularServiceMock,
      'getMostPopularViewedArticles'
    );
    fixture.detectChanges();

    component.ngOnInit().then(() => {
      expect(fetchSpy).toHaveBeenCalledWith(input);
    });
  });

  it('MostPopularArticlesComponent initially must save mostPopularViewedArticles first page in the store service', () => {
    // spy
    const stateSpy = jest.spyOn(StoreMock, 'dispatch');

    const input = {
      results: Array(20).fill(undefined),
    } as MostPopularViewedArticlesResponseDto;

    jest
      .spyOn(NYTMostPopularServiceMock, 'getMostPopularViewedArticles')
      .mockResolvedValue(input);

    fixture.detectChanges();
    component.ngOnInit().then(() => {
      expect(component.nytMostPopularViewedArticles).toEqual(input);
      expect(stateSpy).toHaveBeenCalled();
    });
  });

  it('MostPopularArticlesComponent initially must subscribe to selectMostPopularViewedArticles redux selector', () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const subject: Subject<MostPopularViewedArticlesResponseDto> =
      new Subject();

    jest.spyOn(StoreMock, 'pipe').mockReturnValue(subject.asObservable());

    component.ngOnInit().then(() => {
      subject.next({ results: [] } as MostPopularViewedArticlesResponseDto);
      fixture.detectChanges();
    });
  });
});
