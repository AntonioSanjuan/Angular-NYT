import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TopNavComponent } from '../../components/top-nav/top-nav.component';
import { SearchComponent } from 'src/app/components/common/search/search.component';

const modules = [CommonModule, FormsModule, ReactiveFormsModule];
const sharedComponents = [TopNavComponent, SearchComponent];

@NgModule({
  declarations: [...sharedComponents],
  imports: [...modules],
  exports: [...modules, ...sharedComponents],
})
export class SharedModule {}
