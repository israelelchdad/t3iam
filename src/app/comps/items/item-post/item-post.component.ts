import { Component, OnInit, Input } from '@angular/core';
import { Posts } from '../../../model/posts';

@Component({
  selector: 'app-item-post',
  templateUrl: './item-post.component.html',
  styleUrls: ['./item-post.component.css']
})
export class ItemPostComponent implements OnInit {
  @Input() post:Posts

  constructor() { }

  ngOnInit() {
  }

}
