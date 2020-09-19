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

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
