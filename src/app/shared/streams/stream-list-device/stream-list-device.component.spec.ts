import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StreamListDeviceComponent } from './stream-list-device.component';

describe('StreamListDeviceComponent', () => {
  let component: StreamListDeviceComponent;
  let fixture: ComponentFixture<StreamListDeviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StreamListDeviceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StreamListDeviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
