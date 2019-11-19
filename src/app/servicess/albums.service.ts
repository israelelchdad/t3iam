import { Injectable } from '@angular/core';
import { Album } from '../model/album';
import { HttpClient } from '@angular/common/http';
import { UserService } from './user.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {
  private api='https://jsonplaceholder.typicode.com/albums?userId=#'
 

  constructor(private http:HttpClient,private svcuser:UserService ) { }


  getalbubyuser():Observable<Album[]>{
    return this.http.get<Album[]>(this.api.replace("#",this.svcuser.selecteduser.id.toString()))

  }
}
