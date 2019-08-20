import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioMostrarComponent } from './usuario-mostrar.component';

describe('UsuarioMostrarComponent', () => {
  let component: UsuarioMostrarComponent;
  let fixture: ComponentFixture<UsuarioMostrarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuarioMostrarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioMostrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
