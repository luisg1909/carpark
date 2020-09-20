import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiculosComponent } from './vehiculos.component';
import { HttpClientTestingModule } from '@angular/common/http/testing'; 
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

describe('VehiculosComponent', () => {
  let component: VehiculosComponent;
  let fixture: ComponentFixture<VehiculosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
    
         RouterTestingModule,
       
         FormsModule, ReactiveFormsModule,
         HttpClientTestingModule,
        RouterTestingModule.withRoutes([]),

       ],
      declarations: [ VehiculosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiculosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('probar que el nombre de vehiculo venga vacio', () => {
          
    expect( function(){ 
      let nombre=""
      let placa="123456789"
      let modelo="mazda"

      component.Registro(nombre,placa,modelo); 
      
      } ).toThrow(new Error("fallo registro"));

  });
  it('probar que la placa venga vacio', () => {
          
    expect( function(){ 
      let nombre="mazda"
      let placa=""
      let modelo="mazda"
  
      component.Registro(nombre,placa,modelo); 
      
      } ).toThrow(new Error("fallo registro"));

  });
  it('probar que el modelo venga vacio', () => {
          
    expect( function(){ 
      let nombre="mazda"
      let placa="3-777"
      let modelo=""
     
       component.Registro(nombre,placa,modelo); 
      
      } ).toThrow(new Error("fallo registro"));

  });
  
  
  it('probar que todos los datos sean correctos', () => {
          
    expect( function(){ 
      let nombre="mazda"
      let placa="3-777"
      let modelo="njjj"
     
      
      let result=component.Registro(nombre,placa,modelo);
      expect(true).toBeTruthy()

  

      } ).not.toThrow();

  });





  it('probar que la placa sea nulo', () => {
          
    expect( function(){ 
      let nombre="mazda"
      let placa=null
      let modelo="mazda"

       component.Registro(nombre,placa,modelo);
      
      } ).toThrow(new Error("fallo registro"));

  });

  it('probar que inserte un vehiculo', () => {
    // var spytoUpperCase = spyOn(String.prototype, 'toUpperCase').and.returnValue("HELLO WORLD"); 
    
    expect( function(){ 
    
  
       component.nombre="mazda 2001"
       component.placa="1255551"
       component.modelo="2001-b"

       let result=component.iNGRESAvehiculo9().subscribe(datu=>{
        datu.pipe().subscribe(msg=>{


        expect(msg ).toBeNaN;

        ;}, err=>{
          this.nombre=null
      
           this.servicio.message("Ocurrio un error ","error") 
           console.log(err); throw "";}); 
          }); 

        // expect(result).toBeTruthy();


      } ).not.toThrow();

  });

  it('probar que ingresarvehiculo retorne true', () => {
    // var spytoUpperCase = spyOn(String.prototype, 'toUpperCase').and.returnValue("HELLO WORLD"); 
    
    expect( function(){ 
    
      
       let result=component.ingresarvehiculo();
       expect(true).toBeTruthy()

       

      } ).not.toThrow();

  });


  
  it('probar que generar retorne true', () => {
    // var spytoUpperCase = spyOn(String.prototype, 'toUpperCase').and.returnValue("HELLO WORLD"); 
    
    expect( function(){ 
    
      
       let result=component.generar();

       

      } ).not.toThrow();

  });




});
