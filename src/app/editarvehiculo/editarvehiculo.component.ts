import { Component, OnInit } from '@angular/core';
import { ServicioService } from '.././servicio.service';

@Component({
  selector: 'app-editarvehiculo',
  templateUrl: './editarvehiculo.component.html',
  styleUrls: ['./editarvehiculo.component.scss']
})
export class EditarvehiculoComponent implements OnInit {

  constructor(private servicio:ServicioService) { }
  nombre:string=""
  placa:string=""
  modelo:string=""
  id:string=""

  ngOnInit() {
    this.id="e"
  }
  editar1() {

    let esvalido=false
      try {
        esvalido=this.Editar(this.nombre,this.placa,this.modelo,this.id)
     
     
     } catch(e) {
       console.log(e); 
     }
     if (esvalido)this.editarvehiculo()
  }
  editarvehiculo(){
  }
  Editar(nombre,placa,modelo,id){

    if(!nombre || !placa || !modelo || !id )  {
      this.servicio.message("Hay valores nulos, revise","error")
      throw new Error('fallo edición')  }
    if(nombre.length<1 || placa.length<1|| modelo.length<1|| id.length<1)  {
        this.servicio.message("Hay valores vacios, revise","error")
        throw new Error('fallo edición')   }


 return true
    
  }

  Editar2(nombre,placa,modelo,id){

    return true

  }


}
