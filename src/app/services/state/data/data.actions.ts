import { MostPopularViewedArticlesResponseDto } from 'src/app/models/dtos/mostPopularViewedArticles/mostPopularViewedArticlesResponseDto.model';
import { createAction, props } from '@ngrx/store';

export enum AppDataActionTypes {
  SetMostPopularViewedArticles = '[Data] Set AppData MostPopularViewedArticles',
}

export const setMostPopularViewedArticlesAction = createAction(
  AppDataActionTypes.SetMostPopularViewedArticles,
  props<{
    mostPopularViewedArticles_newState: MostPopularViewedArticlesResponseDto;
  }>()
);
