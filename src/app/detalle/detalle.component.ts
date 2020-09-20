import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../servicio.service';
import {FormControl, FormGroup,FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: string;
  symbol: number;
}

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1234567891236, name: 'Andrea', weight: 'Morales', symbol: 45874521},
  {position: 7894561234587, name: 'Jose', weight: 'Garcia', symbol: 75314595},
  {position: 7896545874985, name: 'Alan', weight: 'Gonzales', symbol: 45786315},
  {position: 2486321148551, name: 'Gabriela', weight: 'Lopez', symbol: 453779},
  {position: 4451321898746, name: 'Esteban', weight: 'Giron', symbol: 45623155},
  /*{position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},*/
];

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss']
})
export class DetalleComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol','accion'];
  public dataSource;// = ELEMENT_DATA;
  actualizar:boolean;
  nombre:string;
  apellido:string;
  telefono:string;
  dpi:string;

  emailFormControl = new FormControl('', [
 
  ]);
  emailFormControl2 = new FormControl('', [
 
  ]);
  emailFormControl3 = new FormControl('', [
 
  ]);
  emailFormControl4 = new FormControl('', [
 
  ]);

  matcher = new MyErrorStateMatcher();

  constructor(private serv:ServicioService) { }

  ngOnInit() {
    this.cargarTabla();
    
    
  }

  cargarTabla(){
    let info;
    this.serv.getUsuarios().subscribe(data=>{
      console.log('la data es->',data);
      this.dataSource=data;
    })

    return this.dataSource;
  }

  eliminarUser(id){
    console.log('el id a eliminar es->',id);
    this.serv.eliminarUsuario(id).subscribe(data=>{
      console.log('la data es ',data);
      this.serv.message("usuario eliminado","success");
      this.cargarTabla();
    },err=>{
      console.log('el error es ',err);
      this.serv.message("ha ocurrido un error","error");
    })
  }

  actualizarUser(element){
    this.actualizar=true;
    console.log('el elemento es:',element);
    this.nombre=element.nombre;
    this.apellido=element.apellido;
    this.telefono=element.telefono;
    this.dpi=element.dpi;
  }

  guardar(){
    this.actualizar=false;
  }
  

}
