import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartidosMainComponent } from './partidos-main.component';

describe('PartidosMainComponent', () => {
  let component: PartidosMainComponent;
  let fixture: ComponentFixture<PartidosMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartidosMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartidosMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
