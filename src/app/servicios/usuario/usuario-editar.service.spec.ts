import { TestBed } from '@angular/core/testing';

import { UsuarioEditarService } from './usuario-editar.service';

describe('UsuarioEditarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UsuarioEditarService = TestBed.get(UsuarioEditarService);
    expect(service).toBeTruthy();
  });
});
