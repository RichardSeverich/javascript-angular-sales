import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VentaMostrarComponent } from './venta-mostrar.component';

describe('VentaMostrarComponent', () => {
  let component: VentaMostrarComponent;
  let fixture: ComponentFixture<VentaMostrarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VentaMostrarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VentaMostrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
