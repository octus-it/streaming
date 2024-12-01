import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HerosWithHeaderBgComponent } from './heros-with-header-bg.component';

describe('HerosWithHeaderBgComponent', () => {
  let component: HerosWithHeaderBgComponent;
  let fixture: ComponentFixture<HerosWithHeaderBgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HerosWithHeaderBgComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HerosWithHeaderBgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
