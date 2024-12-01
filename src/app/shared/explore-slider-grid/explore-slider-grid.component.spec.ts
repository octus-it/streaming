import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreSliderGridComponent } from './explore-slider-grid.component';

describe('ExploreSliderGridComponent', () => {
  let component: ExploreSliderGridComponent;
  let fixture: ComponentFixture<ExploreSliderGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExploreSliderGridComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExploreSliderGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
