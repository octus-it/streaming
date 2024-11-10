import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StreamFaqComponent } from './stream-faq.component';

describe('StreamFaqComponent', () => {
  let component: StreamFaqComponent;
  let fixture: ComponentFixture<StreamFaqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StreamFaqComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StreamFaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
