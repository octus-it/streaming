import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StreamStartFreePlanComponent } from './stream-start-free-plan.component';

describe('StreamStartFreePlanComponent', () => {
  let component: StreamStartFreePlanComponent;
  let fixture: ComponentFixture<StreamStartFreePlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StreamStartFreePlanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StreamStartFreePlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
