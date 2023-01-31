import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusquedaComponent } from './principal/busqueda/busqueda.component';
import { VistaComponent } from './principal/vista/vista.component';
import { ApiComponent } from './principal/api/api.component';
//1. Generar todas las rutas para el menu y las paginas que se desarrollo

const routes: Routes = [
  {path: 'vista', component: VistaComponent},
  {path: 'busqueda', component: BusquedaComponent},
  {path: 'api', component: ApiComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
