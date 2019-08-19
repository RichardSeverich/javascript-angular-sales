import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MostrarComponent } from 'src/app/componentes/usuario/mostrar/mostrar.component';
import { CrearComponent } from 'src/app/componentes/usuario/crear/crear.component';
import { EditarComponent } from 'src/app/componentes/usuario/editar/editar.component';
import { EliminarComponent } from 'src/app/componentes/usuario/eliminar/eliminar.component';

const routes: Routes = [
  {path: 'usuario-mostrar', component:MostrarComponent},
  {path: 'usuario-crear', component:CrearComponent},
  {path: 'usuario-editar', component:EditarComponent},
  {path: 'usuario-eliminar', component:EliminarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
