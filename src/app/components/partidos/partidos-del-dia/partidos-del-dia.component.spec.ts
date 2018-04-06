import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartidosDelDiaComponent } from './partidos-del-dia.component';

describe('PartidosDelDiaComponent', () => {
  let component: PartidosDelDiaComponent;
  let fixture: ComponentFixture<PartidosDelDiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartidosDelDiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartidosDelDiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
