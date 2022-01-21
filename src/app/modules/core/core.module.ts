import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { RequestAuthInterceptor } from 'src/app/interceptors/httpAuthorization.interceptor';
import { StoreModule } from '@ngrx/store';
import { RouterStateSerializer } from "@ngrx/router-store";
import { StoreRouterConnectingModule } from '@ngrx/router-store'
import { CustomSerializer } from 'src/app/services/state/route/route.serializer';

// Core modules
const modules = [BrowserModule, BrowserAnimationsModule, HttpClientModule];

@NgModule({
  declarations: [],
  imports: [
    StoreModule.forRoot({}), 
    StoreRouterConnectingModule.forRoot({}),
    ...modules],
  exports: [...modules],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestAuthInterceptor,
      multi: true,
    },
    { 
      provide: RouterStateSerializer, 
      useClass: CustomSerializer 
    }
  ],
})
export class CoreModule {}
