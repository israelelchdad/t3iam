import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from 'src/app/model/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private api='https://jsonplaceholder.typicode.com/users/'
  selecteduser:User

  constructor(private http:HttpClient) { }

getusers():Observable<User[]>{
  return this.http.get<User[]>(this.api)
}
}
