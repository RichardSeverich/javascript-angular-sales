import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsuarioMostrarComponent } from 'src/app/componentes/usuario/usuario-mostrar/usuario-mostrar.component';
import { UsuarioCrearComponent } from 'src/app/componentes/usuario/usuario-crear/usuario-crear.component';
import { UsuarioEditarComponent } from 'src/app/componentes/usuario/usuario-editar/usuario-editar.component';
import { UsuarioEliminarComponent } from 'src/app/componentes/usuario/usuario-eliminar/usuario-eliminar.component';


const routes: Routes = [
  {path: 'usuario-mostrar', component:UsuarioMostrarComponent},
  {path: 'usuario-crear', component:UsuarioCrearComponent},
  {path: 'usuario-editar', component:UsuarioEditarComponent},
  {path: 'usuario-eliminar', component:UsuarioEliminarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
