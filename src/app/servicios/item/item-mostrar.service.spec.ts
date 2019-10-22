import { TestBed } from '@angular/core/testing';

import { ItemMostrarService } from './item-mostrar.service';

describe('ItemMostrarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ItemMostrarService = TestBed.get(ItemMostrarService);
    expect(service).toBeTruthy();
  });
});
