import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'; 

import { BorrarvehiculoComponent } from './borrarvehiculo.component';
// import { HttpClientTestingModule } from '@angular/common/http/testing'; 
// import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

describe('BorrarvehiculoComponent', () => {
  let component: BorrarvehiculoComponent;
  let fixture: ComponentFixture<BorrarvehiculoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
    
        // RouterTestingModule,
      
        FormsModule, ReactiveFormsModule,
         HttpClientTestingModule,
      //  RouterTestingModule.withRoutes([]),

      ],
      declarations: [ BorrarvehiculoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrarvehiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('probar que el id de vehiculo venga vacio', () => {
          
    expect( function(){ 
    
      let id=""

      component.Borrar(id);
      
      
      } ).toThrow(new Error("fallo borrado"));

  });

  it('probar que el id de vehiculo sea nulo', () => {
          
    expect( function(){ 
    
      let id=""

      component.Borrar(id);
      
      
      } ).toThrow(new Error("fallo borrado"));

  });
  it('probar que todos los datos sean correctos', () => {
          
    expect( function(){ 
      let id=""

      
      let result=component.Borrar2(id);
      expect(true).toBeTruthy()

  

      } ).not.toThrow();

  });
});
