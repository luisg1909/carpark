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

  it('dominio', () => {
    const service: ServicioService = TestBed.get(ServicioService);
    expect(service.get_domain()).toBeTruthy();
  });

  it('crear', () => {
    const service: ServicioService = TestBed.get(ServicioService);
    let user="usuarios";
    let dato={
      
      nombre:'carlos',
      apellido:'perez',
      elefono:456789,
      dpi:'1587456321'
    }
    expect(service.NuevoUsuario(user,dato)).toBeTruthy();
  });

  it('eliminar', () => {
    const service: ServicioService = TestBed.get(ServicioService);
    let id="5f66afc0365cc137d00975cf"
    expect(service.eliminarUsuario(id)).toBeTruthy();
  });

  it('actualizar', () => {
    const service: ServicioService = TestBed.get(ServicioService);
    let id="5f66afc0365cc137d00975cf";
    let dato={
      
      nombre:'carlos',
      apellido:'perez',
      elefono:456789,
      dpi:'1587456321'
    }
    expect(service.actualizarUsuario(id,dato)).toBeTruthy();
  });
  it('leer', () => {
    const service: ServicioService = TestBed.get(ServicioService);
    expect(service.getUsuarios()).toBeTruthy();
  });
});
