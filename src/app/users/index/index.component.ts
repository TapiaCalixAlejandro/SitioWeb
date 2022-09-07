
import swal from 'sweetalert2';import { Component, OnInit } from '@angular/core';
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

  edit(user:User):void {
    localStorage.setItem("id",user.id.toString());
    this.router.navigate(["users/edit",user])
  }

  delete(user:User) {
    swal({
      title: '¿Estás seguro?',
      text: "¡No podrás revertir este cambio!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: '¡Si, eliminar!',
      cancelButtonText: '¡No, cancelar!',
      confirmButtonColor: 'green',
      cancelButtonColor: 'red',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        this.service.delete(user.id)
          .subscribe(data => {
            this.users = this.users.filter(u => u !== user);
            swal(
              '¡Eliminado!',
              'Registro eliminado con exito.',
              'success'
            )
          })
      }  else if (
        /* Read more about handling dismissals below */
        result.dismiss === swal.DismissReason.cancel
      ) {
        swal(
          '¡Cancelado!',
          'La acción ha sido cancelada.',
          'error'
        )
      }
    })
    
  }

}
