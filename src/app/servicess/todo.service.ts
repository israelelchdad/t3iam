import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from '../model/todo';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private api = 'https://jsonplaceholder.typicode.com/todos/'
  private apii = 'https://jsonplaceholder.typicode.com/todos?userId=#'

  constructor( private http:HttpClient, private svcusr:UserService) { }

  getTodos():Observable<Todo[]>{
    return this.http.get<Todo[]>(this.apii.replace("#",this.svcusr.selecteduser.id.toString()))
  }
  get(id:number):Observable<Todo>{
  return this.http.get<Todo>(this.api + id) 
  }
}
