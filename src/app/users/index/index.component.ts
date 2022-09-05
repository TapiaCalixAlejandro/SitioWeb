import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/models/User';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  users:User[];

  constructor(private service:UserService, private http:HttpClient) { }

  ngOnInit() {
    this.service.getUsers()
     .subscribe(data => {
      this.users = data;
     })
  }

}
