import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-borrarvehiculo',
  templateUrl: './borrarvehiculo.component.html',
  styleUrls: ['./borrarvehiculo.component.scss']
})
export class BorrarvehiculoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  Borrar(id) {
    throw new Error('fallo borrado')  


  }
  Borrar2(id) {
    return true


  }

}
