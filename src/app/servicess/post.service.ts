import { Injectable } from '@angular/core';
import { Posts } from 'src/app/model/posts';
import { HttpClient } from '@angular/common/http';
import { UserService } from 'src/app/servicess/user.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private api='https://jsonplaceholder.typicode.com/posts/'
  private usersapi='https://jsonplaceholder.typicode.com/posts/?userId=#'

 selectedPost:Posts
 

  constructor(private http:HttpClient,private usrsSvc: UserService) { }
  
  
   getPostsBySelectedUser():Observable<Posts[]>{
    return this.http.get<Posts[]>(this.usersapi
    .replace("#",this.usrsSvc.selecteduser.id.toString()));
  }
  get(id:number):Observable<Posts>{
    return this.http.get<Posts>(this.api+id)
  }



}
