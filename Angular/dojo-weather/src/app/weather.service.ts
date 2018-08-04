// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

// import { Weather } from './weather';

// @Injectable({
//   providedIn: 'root',
// })
// export class WeatherService {
//   constructor(private _http: HttpClient) {}

//   getWeather(city: string) {
//     const apiKey = '273aec94ef55ece570185db2e09d8789';
//     return this._http.get(
//       `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&&appid=${apiKey}`
//     );
//   }
// }

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { Weather } from './weather';
@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private _http: HttpClient) {}

  getWeather(city: string) {
    const apiKey = '273aec94ef55ece570185db2e09d8789';
    return this._http
      .get(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&&appid=${apiKey}`
      )
      .pipe(
        map(data => {
          const {
            humidity,
            temp,
            temp_max: tempMax,
            temp_min: tempMin,
          } = (data as any).main;
          const { description: status } = (data as any).weather[0];
          // console.log(data);
          // console.log(humidity, temp, tempMax, tempMin);
          // console.log(status);
          return new Weather(humidity, temp, tempMax, tempMin, status);
        })
      );
  }
}
