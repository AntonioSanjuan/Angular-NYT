import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Core modules
const modules = [BrowserModule];

@NgModule({
  declarations: [],
  imports: [...modules],
  exports: [...modules],
})
export class CoreModule {}
