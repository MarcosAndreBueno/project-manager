import { NgModule } from '@angular/core'
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routes';
import { MainComponent } from './main/main.component';
import { MainModule } from './main/main.module';

@NgModule({
    imports: [
        AppComponent,
        MainComponent
    ],
    declarations: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule
    ],
    bootstrap: []
}) export class AppModule { }