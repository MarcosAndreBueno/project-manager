import { bootstrapApplication } from '@angular/platform-browser';
import  routeConfig from './app/app.routes';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withFetch} from '@angular/common/http';
import { provideZoneChangeDetection } from '@angular/core';


bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routeConfig),
    provideZoneChangeDetection(),
    provideHttpClient(withFetch()),
  ]
}).catch((err) => console.error(err));