import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  url = 'http://localhost:7575/users/';

  getUsers() {
    return this.http.get<User[]>(this.url+'index');
  }

  create(user:User) {
    return this.http.post<User>(this.url,user);
  }

  show(id:number) {
    return this.http.get<User>(this.url+id);
  }

  update(user:User) {
    return this.http.put<User>(this.url+user.id,user);
  }

  delete(id:number) {
    return this.http.delete<User>(this.url+id);
  }

}
