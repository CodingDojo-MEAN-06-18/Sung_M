import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { Weather } from '../weather';

@Component({
  selector: 'app-washingtondc',
  templateUrl: './washingtondc.component.html',
  styleUrls: ['./washingtondc.component.css'],
})
export class WashingtondcComponent implements OnInit {
  weather: Weather;

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    this.weatherService.getWeather('washington').subscribe(weather => {
      console.log(weather);
      this.weather = weather;
    });
  }
}
