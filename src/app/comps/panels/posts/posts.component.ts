import { Component, OnInit } from '@angular/core';
import { Posts } from '../../../model/posts';
import { PostService } from '../../../servicess/post.service';
import { LocationService } from '../../../servicess/location.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts:Posts[]=[]
  constructor(public svc:PostService,private loc:LocationService) { }

  ngOnInit() {
    this.svc.getPostsBySelectedUser()
    .subscribe(data=> this.posts=data)
  }

}
