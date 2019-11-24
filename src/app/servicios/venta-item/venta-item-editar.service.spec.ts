import { TestBed } from '@angular/core/testing';

import { VentaItemEditarService } from './venta-item-editar.service';

describe('VentaItemEditarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VentaItemEditarService = TestBed.get(VentaItemEditarService);
    expect(service).toBeTruthy();
  });
});
