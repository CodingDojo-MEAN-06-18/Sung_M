import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: String = 'Time Zone Display';

  time = new Date();
  lastTimeZoneSelected = null;

  getDateByZone(timezone) {
    this.time = new Date();
    if (timezone === 'MDT') {
      this.time.setHours(this.time.getHours() - 1);
    } else if (timezone === 'PDT') {
      this.time.setHours(this.time.getHours() - 2);
    } else if (timezone === 'EDT') {
      this.time.setHours(this.time.getHours() + 1);
    }
    this.lastTimeZoneSelected = timezone;
  }

  clear(timezone) {
    this.lastTimeZoneSelected = timezone;
  }
}
