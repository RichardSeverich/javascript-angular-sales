import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MostrarComponent } from './componentes/usuario/mostrar/mostrar.component';
import { CrearComponent } from './componentes/usuario/crear/crear.component';
import { EditarComponent } from './componentes/usuario/editar/editar.component';
import { EliminarComponent } from './componentes/usuario/eliminar/eliminar.component';

@NgModule({
  declarations: [
    AppComponent,
    MostrarComponent,
    CrearComponent,
    EditarComponent,
    EliminarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
