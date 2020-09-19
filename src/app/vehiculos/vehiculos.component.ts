import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vehiculos',
  templateUrl: './vehiculos.component.html',
  styleUrls: ['./vehiculos.component.scss']
})
export class VehiculosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
  }
 
  Registro(nombre,placa,modelo){

      throw new Error('fallo registro') 

  }

  Registro2(nombre,placa,modelo){

    return true

  }
}
