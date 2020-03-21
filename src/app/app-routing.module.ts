import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

// User components
import { UsuarioMostrarComponent } from "src/app/componentes/usuario/usuario-mostrar/usuario-mostrar.component";
import { UsuarioCrearComponent } from "src/app/componentes/usuario/usuario-crear/usuario-crear.component";
import { UsuarioEditarComponent } from "src/app/componentes/usuario/usuario-editar/usuario-editar.component";
import { UsuarioEliminarComponent } from "src/app/componentes/usuario/usuario-eliminar/usuario-eliminar.component";
// Item components
import { ItemMostrarComponent } from "src/app/componentes/item/item-mostrar/item-mostrar.component";
import { ItemCrearComponent } from "src/app/componentes/item/item-crear/item-crear.component";
// Venta components
import { VentaMostrarComponent } from "src/app/componentes/venta/venta-mostrar/venta-mostrar.component";
import { VentaCrearComponent } from "src/app/componentes/venta/venta-crear/venta-crear.component";
// Venta-Item components
import { VentaItemMostrarComponent } from "src/app/componentes/venta-item/venta-item-mostrar/venta-item-mostrar.component";
import { VentaItemCrearComponent } from "src/app/componentes/venta-item/venta-item-crear/venta-item-crear.component";
// Login
import { LoginComponent } from "src/app/componentes/login/login.component";
import { NavBarComponent } from "src/app/componentes/nav-bar/nav-bar.component";

const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "usuario-mostrar", component: UsuarioMostrarComponent },
  { path: "usuario-crear", component: UsuarioCrearComponent },
  { path: "usuario-editar", component: UsuarioEditarComponent },
  { path: "usuario-eliminar", component: UsuarioEliminarComponent },
  { path: "item-mostrar", component: ItemMostrarComponent },
  { path: "item-crear", component: ItemCrearComponent },
  { path: "venta-mostrar", component: VentaMostrarComponent },
  { path: "venta-crear", component: VentaCrearComponent },
  { path: "venta-item-mostrar", component: VentaItemMostrarComponent },
  { path: "venta-item-crear", component: VentaItemCrearComponent },
  { path: "nav-bar", component: NavBarComponent },
  { path: "login", component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
