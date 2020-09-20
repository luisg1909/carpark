import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup, FormGroupDirective, NgForm, Validators,FormBuilder} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { ServicioService } from '.././servicio.service';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {
  info:string;
  public nombre:string;

  loginform: FormGroup;

  /*emailFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"),
  ]);
  passFormControl = new FormControl('', [
    Validators.required
  ]);*/

  nombreFormControl = new FormControl('', [
    Validators.required
  ]);

  apellidoFormControl = new FormControl('', [
    Validators.required
  ]);

  telFormControl = new FormControl('', [
    Validators.required
  ]);

  dpiFormControl = new FormControl('', [
    Validators.required
  ]);

  constructor(private fb: FormBuilder,private servicio:ServicioService) { }

  ngOnInit() {
    this.nombre="test";

    this.loginform = this.fb.group({
  
      //emailFormControl: ['', [Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      //passFormControl: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(200)]],
      nombreFormControl: ['', [Validators.required]],
      apellidoFormControl: ['', [Validators.required]],
      telFormControl: ['', [Validators.required,Validators.pattern("^[0-9]+$")]],
      dpiFormControl: ['', [Validators.required,Validators.pattern("^[0-9]+$")]],

    });
  }

  Registro_test(a:any,b:any){
   
    throw new Error('fallo registro')

  }

  validarDPI(Fdpi:string){

    if (Fdpi.length==13) {
      console.log('si cumple con 13 digitos');
      return true;  
    }else{
      return false;
    }

    
  }

  crear(){
    console.log('el nombre es->',
    this.loginform.controls['nombreFormControl'].value);
    console.log('el dpi es->',
    this.loginform.controls['dpiFormControl'].value);

    var Fnombre=this.loginform.controls['nombreFormControl'].value;
    var Fapellido=this.loginform.controls['apellidoFormControl'].value;
    var Ftelefono=this.loginform.controls['telFormControl'].value;
    var Fdpi=this.loginform.controls['dpiFormControl'].value;

    if(this.validarDPI(Fdpi.toString())){
      const jsonData={nombre:Fnombre,apellido:Fapellido,telefono:Ftelefono,dpi:Fdpi}
      this.servicio.NuevoUsuario('usuarios',jsonData).subscribe(inf=>{
        console.log(inf);
        this.servicio.message("Usuario creado correctamente","success");
        this.info='success';
      },err=>{
        this.servicio.message("Ocurrio un error ","error") 
        console.log(err); throw "";
        this.info='error';
      })
    }else{
      this.info='error';
    }

    

    
  }

  registro(msg:string){
    if (msg=='success') {
      return 'success';
    } else {
      return 'error';
    }
  }

}
