import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'Header';

  
  constructor() { }

  ngOnInit(): void {
  }

  recibirNotificacion(mensaje: any) { 
    console.log('Mensaje recibido del hijo:', mensaje);
    this.title = mensaje;
  }
  

}
