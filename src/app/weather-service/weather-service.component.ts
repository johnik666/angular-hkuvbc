import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HomeComponent } from "../home/home.component";
import 'rxjs/add/operator/map';

@Injectable()
export class WeatherServiceComponent {
  
  url;
  
  constructor(private http:Http)
  {
    this.url='https://www.metaweather.com/api/location/';
  }
  getWeather(woeid)
  {
  return this.http.get( this.url+woeid+'/2015/06/20/').map((res)=>{res.json();
  })
  }



}
// +rok+'/'+mesiac+'/'+den+'/'
// 