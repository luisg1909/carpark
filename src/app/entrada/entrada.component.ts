import { Component, OnInit } from '@angular/core';
import { ServicioService } from '.././servicio.service';
import { VehiculosComponent } from '.././vehiculos/vehiculos.component';
import { Router } from '@angular/router';
import { EditarvehiculoComponent } from '.././editarvehiculo/editarvehiculo.component';

@Component({
  selector: 'app-entrada',
  templateUrl: './entrada.component.html',
  styleUrls: ['./entrada.component.scss']
})
export class EntradaComponent implements OnInit {
  ticket=""
  constructor(private servicio:ServicioService,private router:Router
  ) { }
 generar(){

  this.ticket=  this.servicio.obtenerhora()
  this.servicio.generarhora(this.ticket)
 }
 crear(){
  this.router.navigate(['/ingresov']);
 }
 editar(){
  this.router.navigate(['/editarv']);
 }


  ngOnInit() {
    //test
  }

}
