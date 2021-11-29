import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SkeletonDirective } from 'src/app/directives/skeleton.directive';
import {
  Medium,
  MostPopularViewedArticlesResponseContentDto,
} from 'src/app/models/dtos/mostPopularViewedArticles/mostPopularViewedArticlesResponseDto.model';
import { CoreModule } from 'src/app/modules/core/core.module';
import { SharedModule } from 'src/app/modules/shared/shared.module';

import { NewsCardComponent } from './news-card.component';

describe('NewsCardComponent', () => {
  let component: NewsCardComponent;
  let fixture: ComponentFixture<NewsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewsCardComponent, SkeletonDirective],
      imports: [CoreModule, SharedModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(NewsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('hasImage() should return true if at least has one image', () => {
    const articleWithImage = {
      media: [{} as Medium],
    } as MostPopularViewedArticlesResponseContentDto;

    component.article = articleWithImage;
    const sut = component.hasImage();
    expect(sut).toBeTruthy();
  });

  it('hasImage() should return false if has no one image', () => {
    const articleWithImage = {
      media: [],
    } as MostPopularViewedArticlesResponseContentDto;

    component.article = articleWithImage;
    const sut = component.hasImage();
    expect(sut).toBeFalsy();
  });
});
