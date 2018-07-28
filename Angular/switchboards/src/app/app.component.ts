import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: String = 'Switchboard';

  switches: Boolean[] = [false, false, false, false, false, false, false, false, false, false];

  flipSwitch(idx) {
    this.switches[idx] = !this.switches[idx];
  }
}
