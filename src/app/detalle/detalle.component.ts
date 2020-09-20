import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../servicio.service';
import {FormControl} from '@angular/forms';
import { from } from 'rxjs';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss']
})
export class DetalleComponent implements OnInit {

  public displayedColumns: string[] = ['position', 'name', 'weight', 'symbol','accion'];
  public dataSource;// = ELEMENT_DATA;
  actualizar:boolean;
  nombre:string;
  apellido:string;
  telefono:string;
  dpi:string;
  id:string;

  emailFormControl = new FormControl('', [
 
  ]);
  emailFormControl2 = new FormControl('', [
 
  ]);
  emailFormControl3 = new FormControl('', [
 
  ]);
  emailFormControl4 = new FormControl('', [
 
  ]);


  constructor(private serv:ServicioService) { }

  ngOnInit() {
    this.cargarTabla();
    
    
  }

  cargarInfo(){
    let ob=this.serv.getUsuarios();
    let ob1=from(ob);
    return ob1
  }

  cargarTabla(){

    this.cargarInfo().subscribe(msg=>{
      this.dataSource=msg;
      //console.log('el msg es',this.dataSource);
    })
    
    /*this.serv.getUsuarios().subscribe(data=>{
      console.log('la data es->',data);
      this.dataSource=data;
    })*/

    return this.dataSource;
  }

  eliminar(id){
    let ob=this.serv.eliminarUsuario(id);
    let ob1=from(ob);
    return ob1;
  }

  eliminarUser(id){
    //console.log('el id a eliminar es->',id);
    this.eliminar(id).subscribe(data=>{
      //console.log('la data es ',data);
      data.subscribe(msg=>{
        this.serv.message("usuario eliminado","success");
      this.cargarTabla();
      })
      
      
    },err=>{
      //console.log('el error es ',err);
      this.serv.message("ha ocurrido un error","error");
      
    })
    //throw new Error('fallo eliminacion') 
    return true;
  }

  actualizarUser(element){
    this.actualizar=true;
    //console.log('el elemento es:',element);
    this.nombre=element.nombre;
    this.apellido=element.apellido;
    this.telefono=element.telefono;
    this.dpi=element.dpi;
    this.id=element._id;
    this.cargarTabla();
    return element;

    
  }

  infoUpdate(id){
    const jsonData={nombre:this.nombre,apellido:this.apellido,telefono:this.telefono,dpi:this.dpi}
    let ob=this.serv.actualizarUsuario(id,jsonData);

    let ob1=from(ob);
    return ob1;
  }

  guardar(){
    this.actualizar=false;
    //console.log('el usuairo a eliminar tiene el id ',this.id);
    const jsonData={nombre:this.nombre,apellido:this.apellido,telefono:this.telefono,dpi:this.dpi}

    this.infoUpdate(this.id).subscribe(inf=>{
      //console.log('la data es ',inf);
      inf.subscribe(data=>{
        this.serv.message("usuario Actualizado","success");
      })
      
      
    },err=>{
      //console.log('la data es ',err);
      this.serv.message("Hubo un error","error");
      
    })
   
  }
  

}
