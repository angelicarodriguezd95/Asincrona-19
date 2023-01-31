import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { VistaComponent } from './vista/vista.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { ApiComponent } from './api/api.component';



@NgModule({
  declarations: [
    MenuComponent,
    VistaComponent,
    BusquedaComponent,
    ApiComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule
  ],
  exports:[
    MenuComponent,
    VistaComponent,
    BusquedaComponent,
    ApiComponent
  ]
})
export class PrincipalModule { }
