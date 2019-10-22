import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/router';
import { UsuarioMostrarService } from 'src/app/servicios/usuario/usuario-mostrar.service';
import { User } from 'src/app/modelos/User';
import { UserResponse } from 'src/app/modelos/UserResponse';
import { Inject } from '@angular/core';
import { forwardRef } from '@angular/core';


@Component({
  selector: 'app-usuario-mostrar',
  templateUrl: './usuario-mostrar.component.html',
  styleUrls: ['./usuario-mostrar.component.css']
})

export class UsuarioMostrarComponent implements OnInit {

  arrayUsers:User[];
  userResponse:UserResponse;
  
  constructor(private service:UsuarioMostrarService) { }
  
  ngOnInit() {
    this.service.getUser().subscribe( response => {
      this.userResponse = response;
      this.arrayUsers = this.userResponse.data;
    })
  }
}
