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

  Registro(nombre,placa,hora,parqueo,nivel){

    throw new Error('fallo registro')

  }

  Registro2(nombre,placa,hora,parqueo,nivel){

    return true

  }
}
