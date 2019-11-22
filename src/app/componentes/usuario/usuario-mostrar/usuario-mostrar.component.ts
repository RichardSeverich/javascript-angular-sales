import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioMostrarService } from 'src/app/servicios/usuario/usuario-mostrar.service';
import { UsuarioEliminarService } from 'src/app/servicios/usuario/usuario-eliminar.service';
import { User } from 'src/app/modelos/User';
import { UserResponse } from 'src/app/modelos/UserResponse';
import { Inject } from '@angular/core';
import { forwardRef } from '@angular/core';
import { Location } from '@angular/common';


@Component({
  selector: 'app-usuario-mostrar',
  templateUrl: './usuario-mostrar.component.html',
  styleUrls: ['./usuario-mostrar.component.css']
})

export class UsuarioMostrarComponent implements OnInit {

  arrayUsers:User[];
  userResponse:UserResponse;
  errorMessage="Error, please contact your administrator";
  
  constructor(private router:Router, 
    private service:UsuarioMostrarService,
    private serviceEliminar:UsuarioEliminarService,
    private location: Location) { }
  
  ngOnInit() {
    this.service.getUser().subscribe( 
      response => {
        this.userResponse = response;
        this.arrayUsers = this.userResponse.data;
      },
      error => {
        console.log(error);
        this.userResponse = error.error;
        if (this.userResponse.textMessage != undefined){
          console.log(this.userResponse.textMessage);
          alert(this.userResponse.textMessage)
        }  else {
          alert(this.errorMessage)
        }
      }
    )
  }

  usuarioEliminar(userId){
    this.serviceEliminar.deleteUser(userId).subscribe( 
      response => {
        this.userResponse = response;
        alert(this.userResponse.textMessage)
        this.pageRefresh();
      } , 
      error => {
        console.log(error);
        this.userResponse = error.error;
        if (this.userResponse.textMessage != undefined){
          console.log(this.userResponse.textMessage);
          alert(this.userResponse.textMessage)
        }  else {
          alert(this.errorMessage)
        }
      }
    )
    
  }

  pageRefresh() {
    location.reload();
 }

}
