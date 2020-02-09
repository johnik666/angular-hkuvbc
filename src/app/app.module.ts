import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { WeatherServiceComponent } from './weather-service/weather-service.component';
import { HomeComponent } from './home/home.component';
import { SettingComponent } from './setting/setting.component';


const appRoutes=[
  {
    path:'',component:HomeComponent
  },
  {
    path:'setting',component:SettingComponent
  },
  {
    path:'home',component:HomeComponent
  }
];

@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot(appRoutes), HttpModule ],
  declarations: [ AppComponent, HomeComponent, SettingComponent ],
  bootstrap:    [ AppComponent ],
  providers:    [ WeatherServiceComponent ]
})
export class AppModule { }
