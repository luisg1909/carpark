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
  parqueo:string=""
  nivel:string=""

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
      console.log('this.Hora es '+ this.Hora);
      console.log('this.parqueo es '+ this.parqueo);
      console.log('this.nombre es '+ this.nivel);

      let esvalido=false
      try {
        esvalido=this.Registro(this.nombre,this.placa,this.Hora,this.parqueo,this.nivel)
     
     
     } catch(e) {
       console.log(e); 
     }
     if (esvalido)this.ingresarvehiculo()
  }
  ingresarvehiculo(){
    
  }
  Registro(nombre,placa,hora,parqueo,nivel){

    if(!nombre || !placa || !hora || !parqueo || !nivel )  {
      this.servicio.message("Hay valores nulos, revise","error")
      throw new Error('fallo registro')  }
    if(nombre.length<1 || placa.length<1|| hora.length<1|| parqueo.length<1|| nivel.length<1)  {
        this.servicio.message("Hay valores vacios, revise","error")
        throw new Error('fallo registro')   }
    if(nivel<1 )     {
      if (nivel==0)      this.servicio.message("El nivel no puede ser cero","error") 
      else this.servicio.message("El nivel no puede ser negativo","error") 
      throw new Error('fallo registro') }

 return true
  }

  Registro2(nombre,placa,hora,parqueo,nivel){

    return true

  }
}
