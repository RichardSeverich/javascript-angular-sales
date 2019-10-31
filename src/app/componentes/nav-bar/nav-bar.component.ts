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

  navigateUsuarioMostrar(){
    this.router.navigate(["usuario-mostrar"]);
  }
  navigateUsuarioCrear(){
    this.router.navigate(["usuario-crear"]);
  }

  navigateItemMostrar(){
    this.router.navigate(["item-mostrar"]);
  }
  navigateItemCrear(){
    this.router.navigate(["item-crear"]);
  }
  navigateVentaMostrar(){
    this.router.navigate(["venta-mostrar"]);
  }
  navigateVentaCrear(){
    this.router.navigate(["venta-crear"]);
  }
  navigateDashboard(){
    this.router.navigate(["nav-bar"]);
  }
  navigateLoginPage(){
    this.router.navigate(["login"]);
  }

}
