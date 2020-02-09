import { Component, OnInit } from '@angular/core';
import { WeatherServiceComponent } from "../weather-service/weather-service.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  location={
    woeid:'44418',
    rok: '2015',
    mesiac:'6',
    den:  '22'
  };

  weather:any;

  constructor(private _weatherService:WeatherServiceComponent) { }

  ngOnInit() {

    this._weatherService.getWeather(this.location.woeid).subscribe((response)=>{
      console.log(response);
      this.weather=response;
    });
  }
// ,this.location.rok,this.location.mesiac,this.location.den
}


/*
{"consolidated_weather":[{"id":6239079131774976,"weather_state_name":"Heavy Rain","weather_state_abbr":"hr","wind_direction_compass":"SW","created":"2020-02-09T12:16:03.003248Z","applicable_date":"2020-02-09","min_temp":8.485,"max_temp":13.815,"the_temp":12.67,"wind_speed":20.07600901235717,"wind_direction":223.00030477988622,"air_pressure":991.0,"humidity":82,"visibility":7.337772409130677,"predictability":77},{"id":6175563838390272,"weather_state_name":"Light Rain","weather_state_abbr":"lr","wind_direction_compass":"WSW","created":"2020-02-09T12:16:02.710985Z","applicable_date":"2020-02-10","min_temp":4.51,"max_temp":8.290000000000001,"the_temp":7.904999999999999,"wind_speed":14.649291717747024,"wind_direction":254.16627985153858,"air_pressure":1001.0,"humidity":62,"visibility":10.524163882923725,"predictability":75},{"id":4960908298158080,"weather_state_name":"Heavy Rain","weather_state_abbr":"hr","wind_direction_compass":"W","created":"2020-02-09T12:16:02.914322Z","applicable_date":"2020-02-11","min_temp":4.015,"max_temp":7.185,"the_temp":6.68,"wind_speed":14.571245257734828,"wind_direction":259.18638410918686,"air_pressure":1010.5,"humidity":52,"visibility":14.907626958561998,"predictability":77},{"id":5227223382491136,"weather_state_name":"Showers","weather_state_abbr":"s","wind_direction_compass":"WSW","created":"2020-02-09T12:16:03.006951Z","applicable_date":"2020-02-12","min_temp":3.835,"max_temp":8.26,"the_temp":7.26,"wind_speed":9.515963336785175,"wind_direction":251.8288527480584,"air_pressure":1014.0,"humidity":61,"visibility":13.451443569553806,"predictability":73},{"id":6003669046657024,"weather_state_name":"Light Rain","weather_state_abbr":"lr","wind_direction_compass":"SSW","created":"2020-02-09T12:16:03.278626Z","applicable_date":"2020-02-13","min_temp":3.8499999999999996,"max_temp":8.59,"the_temp":6.55,"wind_speed":9.254030763925343,"wind_direction":199.1821476262922,"air_pressure":999.0,"humidity":83,"visibility":7.991454903364352,"predictability":75},{"id":5672571628421120,"weather_state_name":"Heavy Rain","weather_state_abbr":"hr","wind_direction_compass":"S","created":"2020-02-09T12:16:05.623385Z","applicable_date":"2020-02-14","min_temp":3.72,"max_temp":10.475,"the_temp":7.45,"wind_speed":8.219851666268989,"wind_direction":179.0,"air_pressure":998.0,"humidity":84,"visibility":9.999726596675416,"predictability":77}],"time":"2020-02-09T13:05:33.525835Z","sun_rise":"2020-02-09T07:26:31.649999Z","sun_set":"2020-02-09T17:03:34.411788Z","timezone_name":"LMT","parent":{"title":"England","location_type":"Region / State / Province","woeid":24554868,"latt_long":"52.883560,-1.974060"},"sources":[{"title":"BBC","slug":"bbc","url":"http://www.bbc.co.uk/weather/","crawl_rate":360},{"title":"Forecast.io","slug":"forecast-io","url":"http://forecast.io/","crawl_rate":480},{"title":"HAMweather","slug":"hamweather","url":"http://www.hamweather.com/","crawl_rate":360},{"title":"Met Office","slug":"met-office","url":"http://www.metoffice.gov.uk/","crawl_rate":180},{"title":"OpenWeatherMap","slug":"openweathermap","url":"http://openweathermap.org/","crawl_rate":360},{"title":"Weather Underground","slug":"wunderground","url":"https://www.wunderground.com/?apiref=fc30dc3cd224e19b","crawl_rate":720},{"title":"World Weather Online","slug":"world-weather-online","url":"http://www.worldweatheronline.com/","crawl_rate":360}],"title":"London","location_type":"City","woeid":44418,"latt_long":"51.506321,-0.12714","timezone":"Europe/London"}
*/