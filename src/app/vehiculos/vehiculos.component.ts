import { Component, OnInit } from '@angular/core';
import { ServicioService } from '.././servicio.service';
import { from } from 'rxjs';

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

    //  console.log('this.Hora es '+ this.Hora);


  }
  generar(){
/* 
    this.Registro(this.nombre,this.placa,this.Hora
      ,this.parqueo,this.nivel)
 */
   /*    console.log('this.nombre es '+ this.nombre);
      console.log('this.placa es '+ this.placa);
      console.log('this.modelo es '+ this.modelo);
 */
      let esvalido=false
      try {
        esvalido=this.Registro(this.nombre,this.placa,this.modelo)
     
     
     } catch(e) {
      //  console.log(e); 
     }
    this.ingresarvehiculo()

     return true

  }

  
  iNGRESAvehiculo9(){
    const body = { nombre:  this.nombre,placa:  this.placa,modelo:  this.modelo }

    let ob =  this.servicio.getPosturlas("vehiculos",body)

    let obs1 = from(ob);
    return obs1
  }
  ingresarvehiculo(){
   /*  const formData = new FormData();
    formData.append('nombre',  this.nombre);
    formData.append('placa', this.placa);
    formData.append('modelo', this.modelo);
 */
    const body = { nombre:  this.nombre,placa:  this.placa,modelo:  this.modelo }


    this.iNGRESAvehiculo9().subscribe(msg1=>{

      msg1.subscribe(msg=>{

        this.servicio.message("vehiculo creado correctamente","success") 
      }); 

   ;}, err=>{
     this.servicio.message("Ocurrio un error ","error") 
    //  console.log(err); 
     throw "";}); 

     return true
  }

/*   ingresarvehiculo(){
 
     const body = { nombre:  this.nombre,placa:  this.placa,modelo:  this.modelo }
 
 
     this.servicio.getPosturl("vehiculos",body).subscribe(msg=>{
       this.servicio.message("vehiculo creado correctamente","success") 
 
    ;}, err=>{
      this.servicio.message("Ocurrio un error ","error") 
      console.log(err); throw "";}); 
 
      return true
   } */
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
