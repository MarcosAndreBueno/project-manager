import { bootstrapApplication } from '@angular/platform-browser';
import  routeConfig from './app/app.routes';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';


bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routeConfig),
    importProvidersFrom(HttpClientModule),
  ]
}).catch((err) => console.error(err));