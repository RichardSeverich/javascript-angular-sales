import { TestBed } from '@angular/core/testing';

import { MostrarService } from './mostrar.service';

describe('MostrarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MostrarService = TestBed.get(MostrarService);
    expect(service).toBeTruthy();
  });
});
