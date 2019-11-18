import { Component, OnInit } from '@angular/core';
import { LocationService } from '../../../servicess/location.service';

@Component({
  selector: 'app-user-options',
  templateUrl: './user-options.component.html',
  styleUrls: ['./user-options.component.css']
})
export class UserOptionsComponent implements OnInit {

  constructor(private loc:LocationService) { }

  ngOnInit() {
  }
  moveToPage(page:string){
    this.loc.location=page;

  }

}
