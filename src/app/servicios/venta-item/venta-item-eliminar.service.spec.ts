import { TestBed } from '@angular/core/testing';

import { VentaItemEliminarService } from './venta-item-eliminar.service';

describe('VentaItemEliminarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VentaItemEliminarService = TestBed.get(VentaItemEliminarService);
    expect(service).toBeTruthy();
  });
});
