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
  _id:string=""

  data:any
  ngOnInit() {
    this.id="e"

    

    this.servicio.getData().subscribe(msg=>{

      this.data=msg
   ;}, err=>{
     this.servicio.message("Ocurrio un error ","error") 
     console.log(err); throw "";}); 

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

  Traervehiculo(){

    this.servicio.getDataget(this._id).subscribe(msg=>{
    console.log('las preguntas son->',msg);
    console.log('el names es ->',msg ["nombre"]);

    this.nombre=msg ["nombre"]
    this.placa=msg ["placa"]
    this.modelo=msg ["modelo"]
    this.id=msg ["_id"]

   ;}, err=>{
     this.servicio.message("Ocurrio un error ","error") 
     console.log(err); throw "";}); 
  }
  editarvehiculo(){
    const body = { id:this.id,nombre:  this.nombre,placa:  this.placa,modelo:  this.modelo }

    console.log("el server da ",body); 
    // getPuturl
    

    this.servicio.getPuturl("vehiculos", this.id,body).subscribe(msg=>{
      this.servicio.message("vehiculo editado correctamente","success") 

   ;}, err=>{
     this.servicio.message("Ocurrio un error ","error") 
     console.log(err); throw "";}); 
  
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
