import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VentaItemMostrarComponent } from './venta-item-mostrar.component';

describe('VentaItemMostrarComponent', () => {
  let component: VentaItemMostrarComponent;
  let fixture: ComponentFixture<VentaItemMostrarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VentaItemMostrarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VentaItemMostrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
