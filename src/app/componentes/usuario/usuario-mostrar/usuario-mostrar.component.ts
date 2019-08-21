import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/router';
import { UsuarioMostrarService } from 'src/app/servicios/usuario/usuario-mostrar.service';
import { User } from 'src/app/modelos/User';
import { Inject } from '@angular/core';
import { forwardRef } from '@angular/core';


@Component({
  selector: 'app-usuario-mostrar',
  templateUrl: './usuario-mostrar.component.html',
  styleUrls: ['./usuario-mostrar.component.css']
})

export class UsuarioMostrarComponent implements OnInit {

  arrayUsers:User[];
  
  constructor(private service:UsuarioMostrarService) { }
  
  ngOnInit() {
    this.service.getUser().subscribe(data=> {
      this.arrayUsers = data;
    })
  }

}
