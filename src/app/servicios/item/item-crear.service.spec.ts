import { TestBed } from '@angular/core/testing';

import { ItemCrearService } from './item-crear.service';

describe('ItemCrearService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ItemCrearService = TestBed.get(ItemCrearService);
    expect(service).toBeTruthy();
  });
});
