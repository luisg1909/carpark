import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup, FormGroupDirective, NgForm, Validators,FormBuilder} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { ServicioService } from '.././servicio.service';
import { from } from 'rxjs';

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
  loginform: FormGroup;

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
  

    this.loginform = this.fb.group({
      nombreFormControl: ['', [Validators.required]],
      apellidoFormControl: ['', [Validators.required]],
      telFormControl: ['', [Validators.required,Validators.pattern("^[0-9]+$")]],
      dpiFormControl: ['', [Validators.required,Validators.pattern("^[0-9]+$")]],

    });
  }

  validarDPI(Fdpi:string){

    if (Fdpi.length==13) {
      //console.log('si cumple con 13 digitos');
      return true;  
    }else{
      return false;
    }

    
  }

  crearUser(name,jsonData){
    let Fnombre=this.loginform.controls['nombreFormControl'].value;
    let Fapellido=this.loginform.controls['apellidoFormControl'].value;
    let Ftelefono=this.loginform.controls['telFormControl'].value;
    let Fdpi=this.loginform.controls['dpiFormControl'].value;

    jsonData={nombre:Fnombre,apellido:Fapellido,telefono:Ftelefono,dpi:Fdpi}
    name='usuarios';
    let ob=this.servicio.NuevoUsuario(name,jsonData);
    let ob1=from(ob);
    return ob1;
  }

  crear(Fnombre,Fapellido,Ftelefono,Fdpi){

    Fnombre=this.loginform.controls['nombreFormControl'].value;
    Fapellido=this.loginform.controls['apellidoFormControl'].value;
    Ftelefono=this.loginform.controls['telFormControl'].value;
    Fdpi=this.loginform.controls['dpiFormControl'].value;

    
    if(this.validarDPI(Fdpi.toString())){
      const jsonData={nombre:Fnombre,apellido:Fapellido,telefono:Ftelefono,dpi:Fdpi}
      this.crearUser('usuarios',jsonData).subscribe(inf=>{
        //console.log(inf);
        inf.subscribe(da=>{
          this.servicio.message("Usuario creado correctamente","success");
        })
        
       return 'success';
      },err=>{
        this.servicio.message("Ocurrio un error ","error") 
        //console.log(err); throw "";
        
      })
    }else{
      return 'error';
    }
    
    

  }

  validarCampos(Fnombre,Fapellido,Ftelefono,Fdpi){
    if (!Fnombre ||!Fapellido || !Ftelefono || !Fdpi) {
      //console.log('hay valores nulos');
      throw new Error('fallo registro')  
    } 
    return true;

  }

}
