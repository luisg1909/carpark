import { Component, OnInit } from '@angular/core';
import { ServicioService } from '.././servicio.service';

@Component({
  selector: 'app-vehiculos',
  templateUrl: './vehiculos.component.html',
  styleUrls: ['./vehiculos.component.scss']
})
export class VehiculosComponent implements OnInit {

  constructor(private servicio:ServicioService) { }

  Hora:string=""
  nombre:string=""
  placa:string=""
  modelo:string=""

  ngOnInit() {
    this.Hora=  this.servicio.gethora()

     console.log('this.Hora es '+ this.Hora);

  }
  generar(){
/* 
    this.Registro(this.nombre,this.placa,this.Hora
      ,this.parqueo,this.nivel)
 */
      console.log('this.nombre es '+ this.nombre);
      console.log('this.placa es '+ this.placa);
      console.log('this.modelo es '+ this.modelo);

      let esvalido=false
      try {
        esvalido=this.Registro(this.nombre,this.placa,this.modelo)
     
     
     } catch(e) {
       console.log(e); 
     }
     if (esvalido)this.ingresarvehiculo()
  }
  ingresarvehiculo(){
    
  }
  Registro(nombre:string,placa:string,modelo:string){

    if(!nombre || !placa || !modelo )  {
      this.servicio.message("Hay valores nulos, revise","error")
      throw new Error('fallo registro')  }
    if(nombre.length<1 || placa.length<1|| modelo.length<1)  {
        this.servicio.message("Hay valores vacios, revise","error")
        throw new Error('fallo registro')
         }


 return true
  }

 
}
