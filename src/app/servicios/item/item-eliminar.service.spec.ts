import { TestBed } from '@angular/core/testing';

import { ItemEliminarService } from './item-eliminar.service';

describe('ItemEliminarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ItemEliminarService = TestBed.get(ItemEliminarService);
    expect(service).toBeTruthy();
  });
});
