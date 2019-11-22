import { TestBed } from '@angular/core/testing';

import { VentaItemMostrarService } from './venta-item-mostrar.service';

describe('VentaItemMostrarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VentaItemMostrarService = TestBed.get(VentaItemMostrarService);
    expect(service).toBeTruthy();
  });
});
