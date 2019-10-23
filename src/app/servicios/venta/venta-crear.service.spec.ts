import { TestBed } from '@angular/core/testing';

import { VentaCrearService } from './venta-crear.service';

describe('VentaCrearService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VentaCrearService = TestBed.get(VentaCrearService);
    expect(service).toBeTruthy();
  });
});
