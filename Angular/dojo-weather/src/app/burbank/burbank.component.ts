// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-burbank',
//   templateUrl: './burbank.component.html',
//   styleUrls: ['./burbank.component.css']
// })
// export class BurbankComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }
import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { Weather } from '../weather';

@Component({
  selector: 'app-burbank',
  templateUrl: './burbank.component.html',
  styleUrls: ['./burbank.component.css'],
})
export class BurbankComponent implements OnInit {
  weather: Weather;
  constructor(private _weatherService: WeatherService) {}

  ngOnInit() {
    this._weatherService.getWeather('burbank').subscribe(weather => {
      console.log(weather);
      this.weather = weather;
    });
  }
}
