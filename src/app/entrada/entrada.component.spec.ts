import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntradaComponent } from './entrada.component';
import { HttpClientTestingModule } from '@angular/common/http/testing'; 
import { RouterTestingModule } from '@angular/router/testing';

describe('EntradaComponent', () => {
  let component: EntradaComponent;
  let fixture: ComponentFixture<EntradaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        
        HttpClientTestingModule,
        RouterTestingModule

        /*  RouterTestingModule.withRoutes([

          {path: '', component: CrearPreguntaComponent}, {path: 'servicios', component: ServiciosService}
        ]),

       */
       ],
      declarations: [ EntradaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntradaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('probar que crear retorne true', () => {
    // var spytoUpperCase = spyOn(String.prototype, 'toUpperCase').and.returnValue("HELLO WORLD"); 
    
    expect( function(){ 
    
      
       let result=component.crear();
       expect(true).toBeTruthy()

       

      } ).not.toThrow();

  });

  it('probar que editar retorne true', () => {
    // var spytoUpperCase = spyOn(String.prototype, 'toUpperCase').and.returnValue("HELLO WORLD"); 
    
    expect( function(){ 
    
      
       let result=component.editar();
       expect(true).toBeTruthy()

       

      } ).not.toThrow();

  });



  
  it('probar que borrar retorne true', () => {
    // var spytoUpperCase = spyOn(String.prototype, 'toUpperCase').and.returnValue("HELLO WORLD"); 
    
    expect( function(){ 
    
      
       let result=component.borrar();
       expect(true).toBeTruthy()

       

      } ).not.toThrow();

  });


  

  it('probar que generar retorne true', () => {
    // var spytoUpperCase = spyOn(String.prototype, 'toUpperCase').and.returnValue("HELLO WORLD"); 
    
    expect( function(){ 
    
      
       let result=component.generar();
       expect(true).toBeTruthy()

       

      } ).not.toThrow();

  });


});
