import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarvehiculoComponent } from './editarvehiculo.component';
import { ServicioService } from '.././servicio.service';
import { HttpClientTestingModule } from '@angular/common/http/testing'; 
import { RouterTestingModule } from '@angular/router/testing';
import {HttpTestingController} from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

describe('EditarvehiculoComponent', () => {
  let component: EditarvehiculoComponent;
  let fixture: ComponentFixture<EditarvehiculoComponent>;
  let httpMock: HttpTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarvehiculoComponent ],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        FormsModule, ReactiveFormsModule
        // MatPaginator, MatSort
      ],
      providers: [ServicioService]
    })
    .compileComponents();
    httpMock = TestBed.get(HttpTestingController);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarvehiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

 
  it('probar que el nombre de vehiculo venga vacio', () => {
          
    expect( function(){ 
      let nombre=""
      let placa="123456789"
      let modelo="mazda"
      let id="1"

      component.Editar(nombre,placa,modelo,id);
      
      
      } ).toThrow(new Error("fallo edición"));

  });
  it('probar que la placa venga vacio', () => {
          
    expect( function(){ 
      let nombre="mazda"
      let placa=""
      let modelo="mazda"
      let id="1"

      component.Editar(nombre,placa,modelo,id);
      
      
      } ).toThrow(new Error("fallo edición"));

  });
  it('probar que el modelo venga vacio', () => {
          
    expect( function(){ 
      let nombre="mazda"
      let placa="3-777"
      let modelo=""
      let id="1"

       component.Editar(nombre,placa,modelo ,id);
      
      } ).toThrow(new Error("fallo edición"));

  });
  
  
  it('probar que todos los datos sean correctos', () => {
          
    expect( function(){ 
      let nombre="mazda"
      let placa="3-777"
      let modelo="mazda"
      let id="1"

      
      let result=component.Editar(nombre,placa,modelo,id);
      expect(true).toBeTruthy()

  

      } ).not.toThrow();

  });





  it('probar que el id sea nulo', () => {
          
    expect( function(){ 
      let nombre="mazda"
      let placa="222"
      let modelo="mazda"
      let id=null

       component.Editar(nombre,placa,modelo,id);
      
      } ).toThrow(new Error("fallo edición"));

  });


/*  describe('when fetching all stuff', () => {
    it('should make a GET request', async(() => {
        
      // exampleService.getStuff();
      
        let req = httpMock.expectOne('.././exam.json');
        expect(req.request.method).toEqual('GET');
          req.flush([]);
    }));
});  */
/* 
    it('Debe ser metodo get el que obtiene las preguntas', async(() => {


      // const service: ServiciosService = TestBed.get(ServiciosService);


      const request = httpMock.expectOne('http://localhost:3000/preguntas');
      expect(request.request.method).toBe('GET');
    
    
    
  

  
  
    })); 
   */


    


    afterEach(() => {
      httpMock.verify();
  })

});
