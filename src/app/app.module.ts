import {FormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';


import { UsuarioMostrarComponent } from './componentes/usuario/usuario-mostrar/usuario-mostrar.component';
import { UsuarioCrearComponent } from './componentes/usuario/usuario-crear/usuario-crear.component';
import { UsuarioEditarComponent } from './componentes/usuario/usuario-editar/usuario-editar.component';
import { UsuarioEliminarComponent } from './componentes/usuario/usuario-eliminar/usuario-eliminar.component';
import { UsuarioMostrarService } from './servicios/usuario/usuario-mostrar.service';


@NgModule({
  declarations: [
    AppComponent,
    UsuarioMostrarComponent,
    UsuarioCrearComponent,
    UsuarioEditarComponent,
    UsuarioEliminarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [UsuarioMostrarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
