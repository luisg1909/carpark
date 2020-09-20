import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroComponent } from './registro.component';

import {
  MatButtonModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatSelectModule,
  MatSidenavModule,
  MatCardModule,
  MatTableModule  

} from "@angular/material";
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { HttpClientTestingModule } from '@angular/common/http/testing'; 


describe('RegistroComponent', () => {
  let component: RegistroComponent;
  let fixture: ComponentFixture<RegistroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroComponent ],
      imports: [
        HttpClientTestingModule,
        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatListModule,
        MatSelectModule,
        MatSidenavModule,
        MatCardModule,
        MatTableModule ,
        FormsModule, ReactiveFormsModule,
        BrowserAnimationsModule
      /*    ,
        
       */
        // MatPaginator, MatSort
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  /*it('probar que el nombre de usuario y password esten vacios', () => {
    expect( function(){ 
      let usuario=""
      let password=""
       component.Registro_test(usuario,password); 
      
      } ).toThrow(new Error("fallo registro"));
  });*/

  it("validar dpi", function() {
    let dpi='2984413810101';
    //let dpi=true;
    expect(component.validarDPI(dpi)).toBe(true);
  });



  it("crear usuario", function() {
    let nombre="alan";
    let apellido="perez";
    let telefono=97845;
    let dpi='2984413810101';
    //let dpi=true;
    expect(component.crear(nombre,apellido,telefono,dpi)).not.toContain('successs');
  });

  it("validar nombre", function() {
    expect(component.nombreFormControl).not.toBeNull();
  });

  it('probar que el nombre venga vacio', () => {
          
    expect( function(){ 
      let nombre="";
    let apellido="perez";
    let telefono=97845;
    let dpi='2984413810101';
  
      component.validarCampos(nombre,apellido,telefono,dpi); 
      
      } ).toThrow(new Error("fallo registro"));

  });

  it('probar que el apellido venga vacio', () => {
          
    expect( function(){ 
      let nombre="alan";
    let apellido="";
    let telefono=97845;
    let dpi='2984413810101';
  
      component.validarCampos(nombre,apellido,telefono,dpi); 
      
      } ).toThrow(new Error("fallo registro"));

  });

  it('probar que el telefono venga vacio', () => {
          
    expect( function(){ 
      let nombre="alan";
    let apellido="perez";
    let telefono='';
    let dpi='2984413810101';
  
      component.validarCampos(nombre,apellido,telefono,dpi); 
      
      } ).toThrow(new Error("fallo registro"));

  });

  it('probar que el dpi venga vacio', () => {
          
    expect( function(){ 
      let nombre="alan";
    let apellido="perez";
    let telefono=97845;
    let dpi='';
  
      component.validarCampos(nombre,apellido,telefono,dpi); 
      
      } ).toThrow(new Error("fallo registro"));

  });

  it('probar que todos los datos existan', () => {
          
    expect( function(){ 
      let nombre="alan";
    let apellido="perez";
    let telefono=97845;
    let dpi='2984413810101';
  
     let result= component.validarCampos(nombre,apellido,telefono,dpi); 
     expect(true).toBeTruthy()
      } ).not.toThrow();

  });





  

});

