import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SkeletonDirective } from 'src/app/directives/skeleton.directive';
import {
  Medium,
  MostPopularViewedArticlesResponseContentDto,
} from 'src/app/models/dtos/mostPopularViewedArticles/mostPopularViewedArticlesResponseDto.model';

import { NewsCardComponent } from './news-card.component';

describe('NewsCardComponent', () => {
  let component: NewsCardComponent;
  let fixture: ComponentFixture<NewsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewsCardComponent, SkeletonDirective],
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

  it('getImage() should return last image', () => {
    const input = 'test_url'
    component.article = {
      media: [
        {
          'media-metadata' : [ 
            {}, 
            {}, 
            {
              url: input
            }]
        }
      ]
    } as MostPopularViewedArticlesResponseContentDto;
    const sut = component.getImage();
    expect(sut).toEqual(input)
  });

  it('articleImageLoaded() should set hasSkeleton into true', () => {
    expect(component.hasSkeleton).toBeFalsy;
    component.articleImageLoaded();
    expect(component.hasSkeleton).toBeTruthy;
  });
});
