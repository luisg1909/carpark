import { Component, OnInit } from '@angular/core';
import { ServicioService } from '.././servicio.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-borrarvehiculo',
  templateUrl: './borrarvehiculo.component.html',
  styleUrls: ['./borrarvehiculo.component.scss']
})
export class BorrarvehiculoComponent implements OnInit {

  constructor(private servicio:ServicioService) { }
  // data:any

  getdatalist(){
    let ob =  this.servicio.getDataas( )
    let obs1 = from(ob);
    return obs1    
  }
  ngOnInit() {
/* 
    this. getdatalist().subscribe(datu=>{
      console.log(datu); 
     datu.pipe().subscribe(msg=>{
      this.data=msg


      
  ;}); 
    }); 

    */
   return true
  }
id:string=""
  Borrar1() {

    let esvalido=false
      try {
        esvalido=this.Borrar(this.id)
     
     
     } catch(e) {
      //  console.log(e); 
     }
  this.borrarvehiculo()

     return true

  }

  borrarvehiculot(){


   
      let ob =  this.servicio.borrarasincrono("vehiculos", this.id )
      let obs1 = from(ob);
      return obs1    
   
    
   
  
     
  }

  borrarvehiculo(){

      this.borrarvehiculot().subscribe(msg=>{
        msg.subscribe(msg=>{
  
        this.servicio.message("vehiculo Borrado correctamente","success") 
      }); 
     ;}, err=>{
       this.servicio.message("Ocurrio un error ","error") 
      //  console.log(err); throw "";
       throw new Error('fallo')   
  
      }); 
  
   

    

     return true

  }
  /* borrarvehiculo(){

    this.servicio.getdeleteur("vehiculos", this.id).subscribe(msg=>{
      this.servicio.message("vehiculo Borrado correctamente","success") 

   ;}, err=>{
     this.servicio.message("Ocurrio un error ","error") 
     console.log(err); throw "";
     throw new Error('fallo')   

    }); 


     return true

  } */

  Borrar(id:string) {
    if( !id )  {
      this.servicio.message("El id es nulo, revise","error")
      throw new Error('fallo borrado')  }
    if( id.length<1)  {
        this.servicio.message("El id es vacio, revise","error")
        throw new Error('fallo borrado')   }

 return true

  }


}
