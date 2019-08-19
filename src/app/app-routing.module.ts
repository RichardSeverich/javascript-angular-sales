import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MostrarComponent } from 'src/app/componentes/usuario/mostrar/mostrar.component';
import { CrearComponent } from 'src/app/componentes/usuario/crear/crear.component';
import { EditarComponent } from 'src/app/componentes/usuario/editar/editar.component';
import { EliminarComponent } from 'src/app/componentes/usuario/eliminar/eliminar.component';

const routes: Routes = [
  {path: 'usuarioMostrar', component:MostrarComponent},
  {path: 'usuarioCrear', component:CrearComponent},
  {path: 'usuarioEditar', component:EditarComponent},
  {path: 'usuarioEliminar', component:EliminarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
