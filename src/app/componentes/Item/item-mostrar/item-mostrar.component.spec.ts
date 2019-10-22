import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemMostrarComponent } from './item-mostrar.component';

describe('ItemMostrarComponent', () => {
  let component: ItemMostrarComponent;
  let fixture: ComponentFixture<ItemMostrarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemMostrarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemMostrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
