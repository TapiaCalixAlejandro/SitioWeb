import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  private user:User = new User();

  constructor(private service:UserService, private router:Router) { }

  ngOnInit() {
    let id = localStorage.getItem("id");
    this.service.show(+id)
      .subscribe(data => {
        this.user = data;
      })
  }

  update(user:User) {
    this.router.navigate(["users/edit",user]);
  }

}
