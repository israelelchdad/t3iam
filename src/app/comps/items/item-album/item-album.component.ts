import { Component, OnInit, Input } from '@angular/core';
import { Album } from '../../../model/album';

@Component({
  selector: 'app-item-album',
  templateUrl: './item-album.component.html',
  styleUrls: ['./item-album.component.css']
})
export class ItemAlbumComponent implements OnInit {
   @Input() album:Album

  constructor() {
 
   }

  ngOnInit() {
  }

}
