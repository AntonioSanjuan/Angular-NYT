import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TopNavComponent } from '../../components/top-nav/top-nav.component';
import { SearchComponent } from 'src/app/components/common/search-input/search-input.component';
import { NewsCardComponent } from 'src/app/components/news-card/news-card.component';
import { SkeletonDirective } from 'src/app/directives/skeleton.directive';

const modules = [CommonModule, FormsModule, ReactiveFormsModule];
const sharedComponents = [TopNavComponent, NewsCardComponent, SearchComponent];
const sharedDirectives = [SkeletonDirective]

@NgModule({
  declarations: [...sharedComponents, ...sharedDirectives],
  imports: [...modules],
  exports: [...modules, ...sharedComponents, ...sharedDirectives],
})
export class SharedModule {}
