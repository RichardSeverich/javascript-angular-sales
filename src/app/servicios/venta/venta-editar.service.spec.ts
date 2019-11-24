import { TestBed } from '@angular/core/testing';

import { VentaEditarService } from './venta-editar.service';

describe('VentaEditarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VentaEditarService = TestBed.get(VentaEditarService);
    expect(service).toBeTruthy();
  });
});
