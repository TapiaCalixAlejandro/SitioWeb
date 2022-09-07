import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/models/User';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  users:User[];

  constructor(private service:UserService, private http:HttpClient, private router:Router) { }

  ngOnInit() {
    this.service.getUsers()
     .subscribe(data => {
      this.users = data;
     })
  }

  show(user:User):void {
    localStorage.setItem("id",user.id.toString());
    this.router.navigate(["users/show",user]);
  }

}
