import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadoPartidoComponent } from './resultado-partido.component';

describe('ResultadoPartidoComponent', () => {
  let component: ResultadoPartidoComponent;
  let fixture: ComponentFixture<ResultadoPartidoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultadoPartidoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultadoPartidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
