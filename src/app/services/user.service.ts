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
}
