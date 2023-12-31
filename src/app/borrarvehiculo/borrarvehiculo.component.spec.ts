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

  it('probar que el id de vehiculo sea valido', () => {
          
    expect( function(){ 
    
      let id="88"

      let result=component.Borrar(id);
      expect(true).toBeTruthy()

  

      } ).not.toThrow()

  });


  it("variables declaradas", () => {
    //let msg="si"
        expect(component.id).toEqual('');
      
        
      });
  it('probar que borre el vehiculo en un llamado asincrono con un dato real', () => {
    // var spytoUpperCase = spyOn(String.prototype, 'toUpperCase').and.returnValue("HELLO WORLD"); 
    
    expect( function(){ 
    
  
       component.id="5f6694a1e300eb28f494d95b"

       let result=component.borrarvehiculot().subscribe(msg=>{
        msg.subscribe(msg=>{
          expect(msg).not.toEqual('');

      }); 
     ;}, err=>{
      throw "";
  
      }); 
  
      } ).not.toThrow();

  });


  it('probar que el id de vehiculo sea nulo', () => {
          
    expect( function(){ 
    
      let id=""

      component.Borrar(id);
      
      
      } ).toThrow(new Error("fallo borrado"));

  });
  it('probar que todos los datos sean correctos', () => {
          
    expect( function(){ 
      let id="888"

      
      let result=component.Borrar(id);
      expect(true).toBeTruthy()

  

      } ).not.toThrow();

  });

  it('probar que mande a traer la lista del servicio de carros', () => {
    // var spytoUpperCase = spyOn(String.prototype, 'toUpperCase').and.returnValue("HELLO WORLD"); 
    
    expect( function(){ 
    
  

       let result=component.getdatalist().subscribe(datu=>{
        console.log(datu); 
       datu.pipe().subscribe(msg=>{

        expect(msg).not.toBeFalsy;

        ;}, err=>{
          this.nombre=null
      
           this.servicio.message("Ocurrio un error ","error") 
           console.log(err); throw "";}); 
          }); 

        // expect(result).toBeTruthy();


      } ).not.toThrow();

  });
  it('probar que Borrar1 retorne true cuando id es nulo', () => {
    // var spytoUpperCase = spyOn(String.prototype, 'toUpperCase').and.returnValue("HELLO WORLD"); 
    
    expect( function(){ 
    
      
       let result=component.Borrar1();
       expect(true).toBeTruthy()

       

      } ).not.toThrow();

  });


  it('probar que borrarvehiculo retorne true con id nulo', () => {
    // var spytoUpperCase = spyOn(String.prototype, 'toUpperCase').and.returnValue("HELLO WORLD"); 
    
    expect( function(){ 
    
      
       let result=component.borrarvehiculo();
      } ).not.toThrow();

  });


  it('probar que borrarvehiculo retorne true con id seteado a un valor random', () => {
    // var spytoUpperCase = spyOn(String.prototype, 'toUpperCase').and.returnValue("HELLO WORLD"); 
    
    expect( function(){ 
     component.id="121212"
      
       let result=component.borrarvehiculo();
       expect(true).toBeTruthy()

       

      } ).not.toThrow();

  });

  it('probar que ngOnInit retorne true', () => {
    // var spytoUpperCase = spyOn(String.prototype, 'toUpperCase').and.returnValue("HELLO WORLD"); 
    
    expect( function(){ 
    
      
       let result=component.ngOnInit();
       expect(true).toBeTruthy()

       

      } ).not.toThrow();

  });
});
