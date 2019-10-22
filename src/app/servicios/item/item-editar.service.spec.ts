import { TestBed } from '@angular/core/testing';

import { ItemEditarService } from './item-editar.service';

describe('ItemEditarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ItemEditarService = TestBed.get(ItemEditarService);
    expect(service).toBeTruthy();
  });
});
