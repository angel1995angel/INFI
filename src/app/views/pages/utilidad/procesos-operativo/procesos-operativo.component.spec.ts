import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcesosOperativoComponent } from './procesos-operativo.component';

describe('ProcesosOperativoComponent', () => {
  let component: ProcesosOperativoComponent;
  let fixture: ComponentFixture<ProcesosOperativoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcesosOperativoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProcesosOperativoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
