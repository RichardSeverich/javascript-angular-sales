import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VentaCrearComponent } from './venta-crear.component';

describe('VentaCrearComponent', () => {
  let component: VentaCrearComponent;
  let fixture: ComponentFixture<VentaCrearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VentaCrearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VentaCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
