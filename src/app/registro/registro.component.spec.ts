import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroComponent } from './registro.component';

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


describe('RegistroComponent', () => {
  let component: RegistroComponent;
  let fixture: ComponentFixture<RegistroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroComponent ],
      imports: [

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
    fixture = TestBed.createComponent(RegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  /*it('probar que el nombre de usuario y password esten vacios', () => {
    expect( function(){ 
      let usuario=""
      let password=""
       component.Registro_test(usuario,password); 
      
      } ).toThrow(new Error("fallo registro"));
  });*/

  it("validar dpi", function() {
    expect(component.validarDPI(true)).toBe(true);
  });

  it("validar nombre", function() {
    expect(component.nombre).not.toBeNull();
  });

 

});
