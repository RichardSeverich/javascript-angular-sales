import {FormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// ******* ******* Components ******* *******
// User Components
import { UsuarioMostrarComponent } from './componentes/usuario/usuario-mostrar/usuario-mostrar.component';
import { UsuarioCrearComponent } from './componentes/usuario/usuario-crear/usuario-crear.component';
import { UsuarioEditarComponent } from './componentes/usuario/usuario-editar/usuario-editar.component';
import { UsuarioEliminarComponent } from './componentes/usuario/usuario-eliminar/usuario-eliminar.component';
// Item Components
import { ItemMostrarComponent } from './componentes/item/item-mostrar/item-mostrar.component';
import { ItemCrearComponent } from './componentes/item/item-crear/item-crear.component';
// Venta Components
import { VentaMostrarComponent } from './componentes/venta/venta-mostrar/venta-mostrar.component';
import { VentaCrearComponent } from './componentes/venta/venta-crear/venta-crear.component';
// Venta Item Components
import { VentaItemMostrarComponent } from './componentes/venta-item/venta-item-mostrar/venta-item-mostrar.component';
import { VentaItemCrearComponent } from './componentes/venta-item/venta-item-crear/venta-item-crear.component';
// Other components
import { LoginComponent } from './componentes/login/login.component';
import { NavBarComponent } from './componentes/nav-bar/nav-bar.component';

// ******* ******* Services ******* *******
// User Services
import { UsuarioCrearService } from './servicios/usuario/usuario-crear.service';
import { UsuarioMostrarService } from './servicios/usuario/usuario-mostrar.service';
import { UsuarioEliminarService } from './servicios/usuario/usuario-eliminar.service';
// Item Services
import { ItemCrearService } from './servicios/item/item-crear.service';
import { ItemMostrarService } from './servicios/item/item-mostrar.service';
import { ItemEliminarService } from './servicios/item/item-eliminar.service';
// Venta Services
import { VentaCrearService } from 'src/app/servicios/venta/venta-crear.service';
import { VentaMostrarService } from 'src/app/servicios/venta/venta-mostrar.service';
import { VentaEliminarService } from 'src/app/servicios/venta/venta-eliminar.service';
// Venta-Item Services
import { VentaItemCrearService } from 'src/app/servicios/venta-item/venta-item-crear.service';
import { VentaItemMostrarService } from 'src/app/servicios/venta-item/venta-item-mostrar.service';
import { VentaItemEliminarService } from 'src/app/servicios/venta-item/venta-item-eliminar.service';


@NgModule({
  declarations: [
    // Others
    AppComponent,
    LoginComponent,
    NavBarComponent,
    // User
    UsuarioCrearComponent,
    UsuarioMostrarComponent,
    UsuarioEditarComponent,
    UsuarioEliminarComponent,
    // Item
    ItemMostrarComponent,
    ItemCrearComponent,
    // Venta
    VentaMostrarComponent,
    VentaCrearComponent,
    // VentaItem
    VentaItemCrearComponent,
    VentaItemMostrarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    // Usuarios
    UsuarioCrearService,
    UsuarioMostrarService,
    UsuarioEliminarService,
    //Items
    ItemCrearService,
    ItemMostrarService,
    ItemEliminarService,
    // Ventas
    VentaCrearService,
    VentaMostrarService,
    VentaEliminarService,
    // Ventas Items
    VentaItemCrearService,
    VentaItemMostrarService,
    VentaItemEliminarService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
