import { TestBed } from '@angular/core/testing';

import { ServicioService } from './servicio.service';
<<<<<<< HEAD

import { HttpClientTestingModule } from '@angular/common/http/testing'; 

describe('ServicioService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule
=======
import { HttpClientTestingModule } from '@angular/common/http/testing'; 
import { RouterTestingModule } from '@angular/router/testing';

describe('ServicioService', () => {
  let component: ServicioService;

  beforeEach(() => TestBed.configureTestingModule({


    imports: [
      HttpClientTestingModule,
      RouterTestingModule
>>>>>>> 85d466b159216c91aa7877827afe457fe1a458bb
    ],

  }));

  it('should be created', () => {
    const service: ServicioService = TestBed.get(ServicioService);
    expect(service).toBeTruthy();
  });
<<<<<<< HEAD

  it('dominio', () => {
    const service: ServicioService = TestBed.get(ServicioService);
    expect(service.get_domain()).toBeTruthy();
  });

  it('crear', () => {
    const service: ServicioService = TestBed.get(ServicioService);
    let user="usuarios";
    let dato={
      
      nombre:'carlos',
      apellido:'perez',
      elefono:456789,
      dpi:'1587456321'
    }
    expect(service.NuevoUsuario(user,dato)).toBeTruthy();
  });

  it('eliminar', () => {
    const service: ServicioService = TestBed.get(ServicioService);
    let id="5f66afc0365cc137d00975cf"
    expect(service.eliminarUsuario(id)).toBeTruthy();
  });

  it('actualizar', () => {
    const service: ServicioService = TestBed.get(ServicioService);
    let id="5f66afc0365cc137d00975cf";
    let dato={
      
      nombre:'carlos',
      apellido:'perez',
      elefono:456789,
      dpi:'1587456321'
    }
    expect(service.actualizarUsuario(id,dato)).toBeTruthy();
  });
  it('leer', () => {
    const service: ServicioService = TestBed.get(ServicioService);
    expect(service.getUsuarios()).toBeTruthy();
  });
=======
/* 
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
    let component: ServicioService;

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

}); */

>>>>>>> 85d466b159216c91aa7877827afe457fe1a458bb
});
