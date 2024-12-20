import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreSliderComponent } from './explore-slider.component';

describe('ExploreSliderComponent', () => {
  let component: ExploreSliderComponent;
  let fixture: ComponentFixture<ExploreSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExploreSliderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExploreSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
