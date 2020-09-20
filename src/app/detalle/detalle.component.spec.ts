import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleComponent } from './detalle.component';
import {
  MatButtonModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatSelectModule,
  MatSidenavModule,
  MatCardModule,
  MatTableModule  

} from "@angular/material";
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { HttpClientTestingModule } from '@angular/common/http/testing'; 
import { ServicioService } from '../servicio.service';

import * as sinon from 'sinon';

describe('DetalleComponent', () => {
  let component: DetalleComponent;
  let fixture: ComponentFixture<DetalleComponent>;
  let collaborator: ServicioService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleComponent ],
      imports: [
        HttpClientTestingModule,
        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatListModule,
        MatSelectModule,
        MatSidenavModule,
        MatCardModule,
        MatTableModule ,
        FormsModule, ReactiveFormsModule,
        BrowserAnimationsModule
      /*    ,
        
       */
        // MatPaginator, MatSort
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('cargar tabla', () => {
    
    expect(component.cargarTabla()).not.toBeDefined();;
  });

  it('cargar titulo nombre', () => {
    
    expect(component.displayedColumns).toContain("name");
  });

  it('guardar cambios', () => {
    //let msg="si"
    expect(component.guardar()).toBe();
  });

  it('guardar cambios', () => {
    //let msg="si"
    expect(component.actualizar).toBeUndefined();
  });


  it('obtener datos', () => {
    let dato={
      _id:'5f66afc0365cc137d00975cf',
      nombre:'carlos',
      apellido:'perez',
      elefono:456789,
      dpi:'1587456321'
    }
    
    expect(component.actualizarUser(dato)).toBeDefined();;
  });

 
  it('eliminar usuario', () => {
          
    expect( function(){ 
      let id="5f66afc0365cc137d00975cf"

       component.eliminarUser(id);
      
      } ).toThrow(new Error("fallo eliminacion"));

  });

  /*it('should get the teams (mock)', () => {
    
    collaborator = new ServicioService(undefined);
    component = new DetalleComponent(collaborator);
    const mock = sinon.mock(collaborator);

    // Setup - expectations
    mock.expects('getUsuarios').once();

    // Exercise
    component.ngOnInit();

    // Verify
    mock.verify();

  });*/

 

});
