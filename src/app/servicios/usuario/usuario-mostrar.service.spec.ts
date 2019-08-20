import { TestBed } from '@angular/core/testing';

import { UsuarioMostrarService } from './usuario-mostrar.service';

describe('UsuarioMostrarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UsuarioMostrarService = TestBed.get(UsuarioMostrarService);
    expect(service).toBeTruthy();
  });
});
