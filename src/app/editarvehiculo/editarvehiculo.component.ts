import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editarvehiculo',
  templateUrl: './editarvehiculo.component.html',
  styleUrls: ['./editarvehiculo.component.scss']
})
export class EditarvehiculoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  Editar(nombre,placa,modelo,id){

   
      throw new Error('fallo edición')  
    
  }

  Editar2(nombre,placa,modelo,id){

    return true

  }

}
