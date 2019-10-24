import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private router:Router){}

  ngOnInit() {
  }

  usuarioMostrar(){
    this.router.navigate(["usuario-mostrar"]);
  }
  usuarioCrear(){
    this.router.navigate(["usuario-crear"]);
  }

  itemMostrar(){
    this.router.navigate(["item-mostrar"]);
  }
  itemCrear(){
    this.router.navigate(["item-crear"]);
  }
  ventaMostrar(){
    this.router.navigate(["venta-mostrar"]);
  }
  ventaCrear(){
    this.router.navigate(["venta-crear"]);
  }

}
