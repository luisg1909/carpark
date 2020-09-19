import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup, FormGroupDirective, NgForm, Validators,FormBuilder} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

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

  public nombre:string;

  loginform: FormGroup;

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"),
  ]);
  passFormControl = new FormControl('', [
    Validators.required
  ]);

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

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.nombre="test";

    this.loginform = this.fb.group({
  
      emailFormControl: ['', [Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      passFormControl: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(200)]],
      nombreFormControl: ['', [Validators.required]],
      apellidoFormControl: ['', [Validators.required]],
      telFormControl: ['', [Validators.required,Validators.pattern("^[0-9]+$")]],
      dpiFormControl: ['', [Validators.required,Validators.pattern("^[0-9]+$")]],

    });
  }

  Registro_test(a:any,b:any){
   
    throw new Error('fallo registro')

  }

  validarDPI(dpi:any){
    return true;
  }

}
