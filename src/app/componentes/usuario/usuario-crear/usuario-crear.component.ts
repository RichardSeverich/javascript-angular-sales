import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UsuarioCrearService } from 'src/app/servicios/usuario/usuario-crear.service';
import { User } from 'src/app/modelos/User';

@Component({
  selector: 'app-usuario-crear',
  templateUrl: './usuario-crear.component.html',
  styleUrls: ['./usuario-crear.component.css']
})
export class UsuarioCrearComponent implements OnInit {

  constructor(private router:Router, private service:UsuarioCrearService) { }

  ngOnInit() {
  }

  usuarioCrear(user:User){
    this.service.createUser(user)
    .subscribe(data=>{
      alert("Se creo con exito");
      this.router.navigate(["usuario-mostrar"])
    })
    //alert("Se creo con exito");
    //this.router.navigate(["usuario-mostrar"])
  }

  usuarioCancelar(user:User){
    this.router.navigate(["usuario-mostrar"])
  }

}
