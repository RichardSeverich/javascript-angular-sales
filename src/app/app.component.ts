import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'javascript-angular-sales';

  constructor(private router:Router){}

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

}
