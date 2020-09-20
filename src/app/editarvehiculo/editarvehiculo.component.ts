import { Component, OnInit } from '@angular/core';
import { ServicioService } from '.././servicio.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { from } from 'rxjs';

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

  getdatalist(){
    let ob =  this.servicio.getDataas( )
    let obs1 = from(ob);
    return obs1    
  }
  ngOnInit() {

    this. getdatalist().subscribe(datu=>{
      console.log(datu); 
     datu.pipe().subscribe(msg=>{
      this.data=msg


      
  ;}); 
    }); 

    // this.id="e"

/*     this.servicio.getData().subscribe(msg=>{
      
      this.data=msg



   ;}, err=>{
     this.servicio.message("Ocurrio un error ","error") 
     console.log(err); throw "";});  */

 

     return true

  }
  editar1() {

    let esvalido=false
      try {
        esvalido=this.Editar(this.nombre,this.placa,this.modelo,this.id)
     
     
     } catch(e) {
       console.log(e); 
       throw "";
     }
     if (esvalido)this.editarvehiculo()

     return true


  }
  Traervehiculo9(){
    let ob =  this.servicio.getPostDatapreg( this._id)

    let obs1 = from(ob);
    return obs1
  }
  Traervehiculo(){

/* let ob =  this.servicio.getPostDatapreg( this._id)

let observable = from(ob);

observable.subscribe(datu=>{ */

  this. Traervehiculo9().subscribe(datu=>{
   console.log(datu); 
  datu.pipe().subscribe(msg=>{
    console.log(msg); 

  this.nombre=msg ["nombre"]
  this.placa=msg ["placa"]
  this.modelo=msg ["modelo"]
  this.id=msg ["_id"]


  ;}, err=>{
    this.nombre=null

     this.servicio.message("Ocurrio un error ","error") 
     console.log(err); throw "";}); 
    }); 
     return true


  }

  editarvehiculo(){
    const body = { id:this.id,nombre:  this.nombre,placa:  this.placa,modelo:  this.modelo }

    console.log("el bodyname es  ",body.nombre);
    if(!this.id || ! this.nombre || !this.placa || !this.modelo )  {
       this.servicio.message("Hay valores nulos, revise","error")
       throw new Error('fallo edición')
      // return false
      }


    console.log("el server da ",body); 
    // getPuturl
    

    this.servicio.getPuturl("vehiculos", this.id,body).subscribe(msg=>{
       this.servicio.message("vehiculo editado correctamente","success") 

   ;}); 
  
     return true

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

  


}
