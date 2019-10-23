import { TestBed } from '@angular/core/testing';

import { VentaMostrarService } from './venta-mostrar.service';

describe('VentaMostrarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VentaMostrarService = TestBed.get(VentaMostrarService);
    expect(service).toBeTruthy();
  });
});
