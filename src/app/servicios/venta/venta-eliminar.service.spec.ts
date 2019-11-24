import { TestBed } from '@angular/core/testing';

import { VentaEliminarService } from './venta-eliminar.service';

describe('VentaEliminarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VentaEliminarService = TestBed.get(VentaEliminarService);
    expect(service).toBeTruthy();
  });
});
