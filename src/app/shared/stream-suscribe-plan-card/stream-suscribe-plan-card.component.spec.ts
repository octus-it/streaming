import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StreamSuscribePlanCardComponent } from './stream-suscribe-plan-card.component';

describe('StreamSuscribePlanCardComponent', () => {
  let component: StreamSuscribePlanCardComponent;
  let fixture: ComponentFixture<StreamSuscribePlanCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StreamSuscribePlanCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StreamSuscribePlanCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
