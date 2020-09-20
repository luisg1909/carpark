import { TestBed } from '@angular/core/testing';

import { ServicioService } from './servicio.service';
import { HttpClientTestingModule } from '@angular/common/http/testing'; 
import { RouterTestingModule } from '@angular/router/testing';

describe('ServicioService', () => {
  beforeEach(() => TestBed.configureTestingModule({


    imports: [
      HttpClientTestingModule,
      RouterTestingModule
    ],

  }));

  it('should be created', () => {
    const service: ServicioService = TestBed.get(ServicioService);
    expect(service).toBeTruthy();
  });
});
