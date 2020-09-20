import { Component, OnInit } from '@angular/core';
import { ServicioService } from '.././servicio.service';

@Component({
  selector: 'app-borrarvehiculo',
  templateUrl: './borrarvehiculo.component.html',
  styleUrls: ['./borrarvehiculo.component.scss']
})
export class BorrarvehiculoComponent implements OnInit {

  constructor(private servicio:ServicioService) { }
  data:any

  ngOnInit() {

    this.servicio.getData().subscribe(msg=>{

      this.data=msg
   ;}, err=>{
     this.servicio.message("Ocurrio un error ","error") 
     console.log(err); throw "";}); 


  }
id:string=""
  Borrar1() {

    let esvalido=false
      try {
        esvalido=this.Borrar(this.id)
     
     
     } catch(e) {
       console.log(e); 
     }
     if (esvalido)this.borrarvehiculo()
  }
  borrarvehiculo(){

    this.servicio.getdeleteur("vehiculos", this.id).subscribe(msg=>{
      this.servicio.message("vehiculo Borrado correctamente","success") 

   ;}, err=>{
     this.servicio.message("Ocurrio un error ","error") 
     console.log(err); throw "";}); 
  }

  Borrar(id:string) {
    if( !id )  {
      this.servicio.message("El id es nulo, revise","error")
      throw new Error('fallo borrado')  }
    if( id.length<1)  {
        this.servicio.message("El id es vacio, revise","error")
        throw new Error('fallo borrado')   }


 return true

  }
  Borrar2(id) {
    return true


  }

}
