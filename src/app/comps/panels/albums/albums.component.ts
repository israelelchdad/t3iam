import { Component, OnInit } from '@angular/core';
import { Album } from '../../../model/album';
import { AlbumsService } from '../../../servicess/albums.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  albums:Album[]=[]

  constructor(private svcalbum:AlbumsService) { }

  ngOnInit() {
    // this.albums=this.svcalbum.getalbubyuser()
    this.svcalbum.getalbubyuser().subscribe(data =>this.albums=data)
  }

}
