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
    this.router.navigate(["usuarioMostrar"]);
  }
  usuarioCrear(){
    this.router.navigate(["usuarioCrear"]);
  }

}
