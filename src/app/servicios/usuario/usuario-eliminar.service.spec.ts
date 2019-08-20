import { TestBed } from '@angular/core/testing';

import { UsuarioEliminarService } from './usuario-eliminar.service';

describe('UsuarioEliminarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UsuarioEliminarService = TestBed.get(UsuarioEliminarService);
    expect(service).toBeTruthy();
  });
});
