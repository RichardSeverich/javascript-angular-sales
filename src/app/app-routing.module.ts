import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// User components
import { UsuarioMostrarComponent } from 'src/app/componentes/usuario/usuario-mostrar/usuario-mostrar.component';
import { UsuarioCrearComponent } from 'src/app/componentes/usuario/usuario-crear/usuario-crear.component';
import { UsuarioEditarComponent } from 'src/app/componentes/usuario/usuario-editar/usuario-editar.component';
import { UsuarioEliminarComponent } from 'src/app/componentes/usuario/usuario-eliminar/usuario-eliminar.component';
// Item components
import { ItemMostrarComponent } from 'src/app/componentes/item/item-mostrar/item-mostrar.component';
import { ItemCrearComponent } from 'src/app/componentes/item/item-crear/item-crear.component';
// Venta components
import { VentaMostrarComponent } from 'src/app/componentes/venta/venta-mostrar/venta-mostrar.component';
import { VentaCrearComponent } from 'src/app/componentes/venta/venta-crear/venta-crear.component';

const routes: Routes = [
  {path: 'usuario-mostrar', component:UsuarioMostrarComponent},
  {path: 'usuario-crear', component:UsuarioCrearComponent},
  {path: 'usuario-editar', component:UsuarioEditarComponent},
  {path: 'usuario-eliminar', component:UsuarioEliminarComponent},
  {path: 'item-mostrar', component:ItemMostrarComponent},
  {path: 'item-crear', component:ItemCrearComponent},
  {path: 'venta-mostrar', component:VentaMostrarComponent},
  {path: 'venta-crear', component:VentaCrearComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
