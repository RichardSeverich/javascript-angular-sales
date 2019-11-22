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
import { LoginComponent } from './componentes/login/login.component';
import { NavBarComponent } from './componentes/nav-bar/nav-bar.component';
import { VentaItemMostrarComponent } from './componentes/venta-item/venta-item-mostrar/venta-item-mostrar.component';
import { VentaItemCrearComponent } from './componentes/venta-item/venta-item-crear/venta-item-crear.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UsuarioMostrarComponent,
    UsuarioCrearComponent,
    UsuarioEditarComponent,
    UsuarioEliminarComponent,
    ItemMostrarComponent,
    ItemCrearComponent,
    VentaMostrarComponent,
    VentaCrearComponent,
    NavBarComponent,
    VentaItemMostrarComponent,
    VentaItemCrearComponent,
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
