import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {


  @Output() title = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  enviarAlPadre() {
    this.title.emit('Hola Padre!');  // Emitiendo un evento al padre
  }

}
