import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreDeriveComponent } from './explore-derive.component';

describe('ExploreDeriveComponent', () => {
  let component: ExploreDeriveComponent;
  let fixture: ComponentFixture<ExploreDeriveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExploreDeriveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExploreDeriveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
