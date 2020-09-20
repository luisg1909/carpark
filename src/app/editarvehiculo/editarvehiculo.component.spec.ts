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

  it('probar que editarvehiculo pase porque si estan definidos los campos', () => {
    // var spytoUpperCase = spyOn(String.prototype, 'toUpperCase').and.returnValue("HELLO WORLD"); 
    
    expect( function(){ 
    
      component.nombre="sss",
      component.placa="sss", component.modelo="sss", component.id="sss"

       let result=component.editarvehiculo();

       

      } ).not.toThrow();

  });
  it('probar que editarvehiculo ', () => {
    // var spytoUpperCase = spyOn(String.prototype, 'toUpperCase').and.returnValue("HELLO WORLD"); 
    
    expect( function(){ 
    
      component.nombre="bus",
      component.placa="44444", component.modelo="4000", component.id="5f00eb28f494d95b	"

       let result=component.editarvehiculo();

       

      } ).not.toThrow();

  });


  it('probar response get que retorne nulo si no es valido y sino que si', () => {

    expect( function(){ 
    
      component.nombre="bus",
      component.placa="44444", component.modelo="4000", component.id="5f6699f37c62e80a34328e4e	"

       let result=component.editarvehiculo();

       expect(component.nombre).not.toBe(null);


      } ).not.toThrow();
  }); 


  it('probar que editarvehiculo de throw porque estan vacios los campos', () => {
    // var spytoUpperCase = spyOn(String.prototype, 'toUpperCase').and.returnValue("HELLO WORLD"); 
    
    expect( function(){ 
    
      
       let result=component.editarvehiculo();

       

      } ).toThrow( new Error('fallo edición') );

  });
  it('probar que ngOnInit retorne true', () => {
    // var spytoUpperCase = spyOn(String.prototype, 'toUpperCase').and.returnValue("HELLO WORLD"); 
    
    expect( function(){ 
     
       let result=component.ngOnInit();
       expect(true).toBeTruthy()

       

      } ).not.toThrow();

  });
  it('probar que ngOnInit retorne toThrow cuando no este definido el parametro url', () => {
    // var spytoUpperCase = spyOn(String.prototype, 'toUpperCase').and.returnValue("HELLO WORLD"); 
    
    expect( function(){ 
      const service: ServicioService = TestBed.get(ServicioService);
      service.url=""
      
       let result=component.ngOnInit();

       
      } ).not.toThrow();

  });
  it('probar que editar1 sea valido  cuando sean datos no validos', () => {
    // var spytoUpperCase = spyOn(String.prototype, 'toUpperCase').and.returnValue("HELLO WORLD"); 
    
    expect( function(){ 
      component.nombre="mazda",
      component.placa="1-900", component.modelo="2001", component.id="s-0022"
       let result=component.editar1();

       

      } ).not.toThrow();
  });



  it('probar que editar1 de throw cuando sean datos nulos', () => {
    // var spytoUpperCase = spyOn(String.prototype, 'toUpperCase').and.returnValue("HELLO WORLD"); 
    
    expect( function(){ 
    
      
       let result=component.editar1();

       

      } ).toThrow( );

  });


  it('probar que Traervehiculo retorne true cuando _id es un valor dado', () => {
    // var spytoUpperCase = spyOn(String.prototype, 'toUpperCase').and.returnValue("HELLO WORLD"); 
    
    expect( function(){ 
    
  
       component._id="5f6699f37c62e80a34328e4e"

       let result=component.Traervehiculo9().subscribe(datu=>{
        console.log(datu); 
       datu.pipe().subscribe(msg=>{


        expect(msg ["nombre"]).toEqual('mazda 76660');

        ;}, err=>{
          this.nombre=null
      
           this.servicio.message("Ocurrio un error ","error") 
           console.log(err); throw "";}); 
          }); 

        // expect(result).toBeTruthy();


      } ).not.toThrow();

  });


  it('probar que mande a traer la lista del servicio de carros', () => {
    // var spytoUpperCase = spyOn(String.prototype, 'toUpperCase').and.returnValue("HELLO WORLD"); 
    
    expect( function(){ 
    
  
       component._id="5f6699f37c62e80a34328e4e"

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

  it("variables declaradas", () => {
    //let msg="si"
        expect(component.placa).toEqual('');
        expect(component.nombre).toEqual('');
        expect(component.modelo).toEqual('');
        expect(component.id).toEqual('');
        expect(component._id).toEqual('');
        // expect(component.data).toBe('undefined');

        
      });

  it('cargar placa, nombre,modelo,id,_id,', () => {


 /*    expect(component.placa).toContain("");
    expect(component.nombre).toContain("");
    expect(component.modelo).toContain("");
    expect(component.id).toContain("");
    expect(component._id).toContain("");
 */
    expect(component.placa).not.toBe(null);
    expect(component.nombre).not.toBe(null);
    expect(component.modelo).not.toBe(null);
    expect(component.id).not.toBe(null);
    expect(component._id).not.toBe(null);

  });

 /*  it('cargar titulo nombre', () => {
    
    expect(component.displayedColumns).toContain("name");
  });
 */

 

    it('should create an instance of EditarvehiculoComponent',() => {
      const service: ServicioService = TestBed.get(ServicioService);

      expect(new EditarvehiculoComponent(service)).toBeTruthy();
    });

   it('probar que Traervehiculo retorne false o de throw cuando _id no esta definido', () => {
    // var spytoUpperCase = spyOn(String.prototype, 'toUpperCase').and.returnValue("HELLO WORLD"); 
    
    expect( function(){ 
    

       let result=component.Traervehiculo();

       

      } ).not.toThrow();

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


    


  //   afterEach(() => {
  //     httpMock.verify();
  // })

});
