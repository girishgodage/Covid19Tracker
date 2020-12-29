import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgMaterialModule } from './ng-material/ng-material.module';
import { CountriesComponent } from './components/countries/countries.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardCardComponent } from './components/dashboard-card/dashboard-card.component';
import { GoogleChartsModule } from 'angular-google-charts';
import { MapComponent } from './components/map/map.component';
import { GoogleMapsModule } from '@angular/google-maps';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CountriesComponent,
    DashboardCardComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgMaterialModule,
    HttpClientModule,
    GoogleChartsModule,
    GoogleMapsModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
