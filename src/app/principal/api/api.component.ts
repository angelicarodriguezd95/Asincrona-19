import { HttpClient } from '@angular/common/http';
import { Component,OnInit} from '@angular/core';
import { Asincrona19 } from 'src/app/models/asincrona19';
import { UserserviceService } from 'src/app/services/userservice.service';

interface Film {
  title: string;
}

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent {

  constructor(private userService:UserserviceService) { }
  listado:Asincrona19 = new Array()
  ngOnInit(): void {
    this.ejecutarmetodo()
  }
  ejecutarmetodo(){
    this.userService.getasincrona19().subscribe({
      next: (response: any) => {this.listado = response.body;console.log(response)}
    })
  }
}
