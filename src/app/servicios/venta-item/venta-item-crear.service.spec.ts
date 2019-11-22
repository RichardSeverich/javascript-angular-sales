import { TestBed } from '@angular/core/testing';

import { VentaItemCrearService } from './venta-item-crear.service';

describe('VentaItemCrearService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VentaItemCrearService = TestBed.get(VentaItemCrearService);
    expect(service).toBeTruthy();
  });
});
