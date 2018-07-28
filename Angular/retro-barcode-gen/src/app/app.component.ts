import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title: String = 'Retro Barcode Generator';

  colors: Array<String> = [
    'red',
    'green',
    'orange',
    'yellow',
    'blue',
    'indigo',
    'violet',
    'pink',
    'brown',
    'Chartreuse'
  ]

  randomize() {
    return Math.floor(Math.random() * this.colors.length);
  }
}
