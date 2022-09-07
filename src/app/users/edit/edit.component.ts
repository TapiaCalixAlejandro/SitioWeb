import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  private user:User = new User();

  constructor(private service:UserService, private router:Router) { }

  ngOnInit() {
    let id = localStorage.getItem("id");
    this.service.show(+id)
      .subscribe(data => {
        this.user = data;
      })
  }

  checkValue(event: any){
    console.log(event);
  }

  update(user:User) {
    this.service.update(user)
      .subscribe(data => {
        this.user = data;
        this.router.navigate(["users"]);
        swal('¡Accion exitosa!','El regsitro ha sido modificado.','success');
      })
  }

}
