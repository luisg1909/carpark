import { TestBed } from '@angular/core/testing';

import { ServicioService } from './servicio.service';
import { HttpClientTestingModule } from '@angular/common/http/testing'; 
import { RouterTestingModule } from '@angular/router/testing';

describe('ServicioService', () => {
  let component: ServicioService;

  beforeEach(() => TestBed.configureTestingModule({


    imports: [
      HttpClientTestingModule,
      RouterTestingModule
    ],

  }));

  it('should be created', () => {
    const service: ServicioService = TestBed.get(ServicioService);
    expect(service).toBeTruthy();
  });

  it('probar que el nombre de metodo post venga vacio', () => {
          
    expect( function(){ 
      let name=""
      const body = { id:"1",nombre:  "2",placa:  "3",modelo: "4" }

      component.getPosturl(name,body); 
      
      } ).toThrow(new Error("fallo"));

  });


 it('probar que el nombre de metodo put venga vacio', () => {
          
    expect( function(){ 
      let name=""
      let id="2"
      const body = { id:"1",nombre:  "2",placa:  "3",modelo: "4" }

      component.getPuturl(name,id,body); 
      
      } ).toThrow(new Error("fallo"));

  });


  
 it('probar que el form venga nulo de metodo put ', () => {
          
  expect( function(){ 
    let name=""
    let id="2"
    const body = null

    component.getPuturl(name,id,body); 
    
    } ).toThrow(new Error("fallo"));

});


it('probar que el nombre de metodo delete venga vacio', () => {
          
  expect( function(){ 
    let name=""
    let id="2"

    component.getdeleteur(name,id); 
    
    } ).toThrow(new Error("fallo"));

});


it('probar que el nombre de metodo getDataget venga vacio', () => {
          
  expect( function(){ 
    let name=""

    component.getDataget(name); 
    
    } ).toThrow(new Error("fallo"));

});

it('probar que el nombre de metodo generarhora venga vacio', () => {
          
  expect( function(){ 
    let name=""

    component.generarhora(name); 
    
    } ).toThrow(new Error("fallo"));

});
it('probar que el nombre de metodo generarhora venga vacio', () => {
          
  expect( function(){ 
    let name=""
    let tipo="error"

    component.message(name,tipo); 
    
    } ).toThrow(new Error("fallo"));

});

});
