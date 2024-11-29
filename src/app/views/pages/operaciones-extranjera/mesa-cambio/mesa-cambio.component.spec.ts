import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesaCambioComponent } from './mesa-cambio.component';

describe('MesaCambioComponent', () => {
  let component: MesaCambioComponent;
  let fixture: ComponentFixture<MesaCambioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MesaCambioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MesaCambioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
