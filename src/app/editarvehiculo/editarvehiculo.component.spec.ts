import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarvehiculoComponent } from './editarvehiculo.component';
import { ServicioService } from '.././servicio.service';
import { HttpClientTestingModule } from '@angular/common/http/testing'; 
import { RouterTestingModule } from '@angular/router/testing';
import {HttpTestingController} from '@angular/common/http/testing';

describe('EditarvehiculoComponent', () => {
  let component: EditarvehiculoComponent;
  let fixture: ComponentFixture<EditarvehiculoComponent>;
  let httpMock: HttpTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarvehiculoComponent ],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule

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

      
      let result=component.Editar2(nombre,placa,modelo,id);
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





});
