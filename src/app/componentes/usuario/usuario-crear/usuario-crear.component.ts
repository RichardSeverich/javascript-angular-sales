import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserResponse } from 'src/app/modelos/UserResponse';
import { User } from 'src/app/modelos/User';
import { UsuarioCrearService } from 'src/app/servicios/usuario/usuario-crear.service';

@Component({
  selector: 'app-usuario-crear',
  templateUrl: './usuario-crear.component.html',
  styleUrls: ['./usuario-crear.component.css']
})
export class UsuarioCrearComponent implements OnInit {

  user:User;
  userResponse:UserResponse;
  message="user or password incorrect";
  errorMessage="Error, please contact your administrator";

  constructor(private router:Router, private service:UsuarioCrearService) { }

  ngOnInit() {
  }

  usuarioCrear(id, password, name, lastName, birthDate, email, type){
    this.user = new User();
    this.user.id = id;
    this.user.password = password;
    this.user.name = name;
    this.user.lastName = lastName;
    this.user.birthDate = birthDate;
    this.user.email = email;
    this.user.type = type;
    this.service.createUser(this.user).subscribe(
      data=> {
        console.log(data);
        alert("Se creo con exito");
        this.router.navigate(["usuario-mostrar"])
      },
      error => {
        console.log(error);
        this.userResponse = error.error;
        if (this.userResponse.textMessage != undefined){
          console.log(this.userResponse.textMessage);
          alert(this.userResponse.textMessage)
        } else {
          alert(this.errorMessage)
        }
      }
    )
  }

  usuarioCancelar(user:User){
    this.router.navigate(["usuario-mostrar"])
  }

}
