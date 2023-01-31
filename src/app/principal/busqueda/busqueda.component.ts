import { Component } from '@angular/core';
import { Users } from 'src/app/models/users';

import { UserserviceService } from 'src/app/services/userservice.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent {

  //6. Consumir el servicio

  
  //6.1 CONSUMIR SERVICIO UserServices
  //Crear instancias de UserServices
  constructor(private userService:UserserviceService) { }

  ngOnInit(): void {
  }
  resultado = false
  user!:Users ;
  getUserId(valor:string){
    this.userService.getUserId(valor).subscribe({
      next:(usuario:Users)=> {
        this.resultado = true
        this.user = usuario
      },
      error:(e)=> {console.error(e);this.resultado = false},
      complete:()=>console.log("completado")
    })
  }
}
