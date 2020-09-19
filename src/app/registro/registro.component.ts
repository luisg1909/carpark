import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  public nombre:string;

  constructor() { }

  ngOnInit() {
    this.nombre="test";
  }

  Registro_test(a:any,b:any){
   
    throw new Error('fallo registro')

  }

  validarDPI(dpi:any){
    return true;
  }

}
