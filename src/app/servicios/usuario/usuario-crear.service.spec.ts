import { TestBed } from '@angular/core/testing';

import { UsuarioCrearService } from './usuario-crear.service';

describe('UsuarioCrearService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UsuarioCrearService = TestBed.get(UsuarioCrearService);
    expect(service).toBeTruthy();
  });
});
