import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  private user:User = new User();

  constructor(private service:UserService, private router:Router) { }

  ngOnInit() {
  }

  create(user) {
    this.service.create(user)
      .subscribe(data => {
        this.router.navigate(['/users']);
        alert('Seagregó un nuevo registro de cliente!');
      })
  }
}
