import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiculosComponent } from './vehiculos.component';

describe('VehiculosComponent', () => {
  let component: VehiculosComponent;
  let fixture: ComponentFixture<VehiculosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
      let hora="5:12"
      let parqueo="1"
      let nivel="2"
       component.Registro(nombre,placa,hora,parqueo,nivel); 
      
      } ).toThrow(new Error("fallo registro"));

  });
  it('probar que la placa venga vacio', () => {
          
    expect( function(){ 
      let nombre="mazda"
      let placa=""
      let hora="5:12"
      let parqueo="1"
      let nivel="2"
       component.Registro(nombre,placa,hora,parqueo,nivel); 
      
      } ).toThrow(new Error("fallo registro"));

  });
  it('probar que la hora venga vacio', () => {
          
    expect( function(){ 
      let nombre="mazda"
      let placa="3-777"
      let hora=""
      let parqueo="1"
      let nivel="2"
       component.Registro(nombre,placa,hora,parqueo,nivel); 
      
      } ).toThrow(new Error("fallo registro"));

  });
  it('probar que el nivel venga vacio', () => {
          
    expect( function(){ 
      let nombre="mazda"
      let placa="3-777"
      let hora="5:11"
      let parqueo="1"
      let nivel=""
       component.Registro(nombre,placa,hora,parqueo,nivel); 
      
      } ).toThrow(new Error("fallo registro"));

  });
  it('probar que el parqueo venga vacio', () => {
          
    expect( function(){ 
      let nombre="mazda"
      let placa="3-777"
      let hora="7:22"
      let parqueo=""
      let nivel="2"
       component.Registro(nombre,placa,hora,parqueo,nivel); 
      
      } ).toThrow(new Error("fallo registro"));

  });
  
  it('probar que todos los datos sean correctos', () => {
          
    expect( function(){ 
      let nombre="mazda"
      let placa="3-777"
      let hora="6:44"
      let parqueo="1"
      let nivel="2"
      let result=component.Registro2(nombre,placa,hora,parqueo,nivel); 
      expect(true).toBeTruthy()

  

      } ).not.toThrow();

  });


  it('probar que el nivel sea negativo', () => {
          
    expect( function(){ 
      let nombre="mazda"
      let placa="3-777"
      let hora="7:22"
      let parqueo=""
      let nivel="-2"
       component.Registro(nombre,placa,hora,parqueo,nivel); 
      
      } ).toThrow(new Error("fallo registro"));

  });



  it('probar que la placa sea nulo', () => {
          
    expect( function(){ 
      let nombre="mazda"
      let placa=null
      let hora="7:22"
      let parqueo=""
      let nivel="-2"
       component.Registro(nombre,placa,hora,parqueo,nivel); 
      
      } ).toThrow(new Error("fallo registro"));

  });
});
