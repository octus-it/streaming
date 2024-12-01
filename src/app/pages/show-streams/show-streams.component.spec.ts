import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowStreamsComponent } from './show-streams.component';

describe('ShowStreamsComponent', () => {
  let component: ShowStreamsComponent;
  let fixture: ComponentFixture<ShowStreamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowStreamsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowStreamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
