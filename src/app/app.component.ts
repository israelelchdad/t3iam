import { Component } from '@angular/core';
import { LocationService } from './servicess/location.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 't3i';
  constructor(public location:LocationService){
  

  }
}
