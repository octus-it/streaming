import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StreamTitleSubComponent } from './stream-title-sub.component';

describe('StreamTitleSubComponent', () => {
  let component: StreamTitleSubComponent;
  let fixture: ComponentFixture<StreamTitleSubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StreamTitleSubComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StreamTitleSubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
