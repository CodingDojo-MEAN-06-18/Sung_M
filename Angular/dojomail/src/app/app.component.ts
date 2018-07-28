import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dojo Mail';
  
  emails = [
    {email: 'bill@gates.com', importance: true, subject: 'New Windows', content: 'Windows XI will launch in 2100.'},
    {email: 'ada@lovelace.com', importance: true, subject: 'Programming', content: 'Echantress of Numbers.'},
    {email: 'john@carmac.com', importance: false, subject: 'Updated Algo', content: 'New Algorithm for shadow volumes.'},
    {email: 'gabe@gates.com', importance: false, subject: 'HL3!', content: 'Just kidding...'}
  ]
}
