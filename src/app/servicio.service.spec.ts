import { TestBed } from '@angular/core/testing';

import { ServicioService } from './servicio.service';

import { HttpClientTestingModule } from '@angular/common/http/testing'; 

describe('ServicioService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule
    ],

  }));

  it('should be created', () => {
    const service: ServicioService = TestBed.get(ServicioService);
    expect(service).toBeTruthy();
  });
});
