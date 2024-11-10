import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StreamSuscribePlanComponent } from './stream-suscribe-plan.component';

describe('StreamSuscribePlanComponent', () => {
  let component: StreamSuscribePlanComponent;
  let fixture: ComponentFixture<StreamSuscribePlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StreamSuscribePlanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StreamSuscribePlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
