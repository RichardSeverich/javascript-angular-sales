import {FormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
// Components
// User Components
import { UsuarioMostrarComponent } from './componentes/usuario/usuario-mostrar/usuario-mostrar.component';
import { UsuarioCrearComponent } from './componentes/usuario/usuario-crear/usuario-crear.component';
import { UsuarioEditarComponent } from './componentes/usuario/usuario-editar/usuario-editar.component';
import { UsuarioEliminarComponent } from './componentes/usuario/usuario-eliminar/usuario-eliminar.component';
// Item Components
import { ItemMostrarComponent } from './componentes/item/item-mostrar/item-mostrar.component';
import { ItemCrearComponent } from './componentes/item/item-crear/item-crear.component';
// VentaComponents
import { VentaMostrarComponent } from './componentes/venta/venta-mostrar/venta-mostrar.component';
import { VentaCrearComponent } from './componentes/venta/venta-crear/venta-crear.component';
// Import Services
import { UsuarioMostrarService } from './servicios/usuario/usuario-mostrar.service';
import { ItemMostrarService } from './servicios/item/item-mostrar.service';
import { VentaMostrarService } from 'src/app/servicios/venta/venta-mostrar.service';


@NgModule({
  declarations: [
    AppComponent,
    UsuarioMostrarComponent,
    UsuarioCrearComponent,
    UsuarioEditarComponent,
    UsuarioEliminarComponent,
    ItemMostrarComponent,
    ItemCrearComponent,
    VentaMostrarComponent,
    VentaCrearComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    UsuarioMostrarService,
    ItemMostrarService,
    VentaMostrarService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
