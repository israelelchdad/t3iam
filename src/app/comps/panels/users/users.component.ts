import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../servicess/user.service';
import { User } from '../../../model/user';
import { LocationService } from '../../../servicess/location.service';

@Component({
  selector: 'panel-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users:User[]=[]

  constructor(public svc:UserService , private loc:LocationService ) { }

  ngOnInit() {
    this.svc.getusers()
    .subscribe(data=> this.users=data)
  }
  selectUser (u:User){
    this.svc.selecteduser=u
    this.loc.location="userOptions"
    
  }

}
