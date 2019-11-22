import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VentaItemCrearComponent } from './venta-item-crear.component';

describe('VentaItemCrearComponent', () => {
  let component: VentaItemCrearComponent;
  let fixture: ComponentFixture<VentaItemCrearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VentaItemCrearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VentaItemCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
