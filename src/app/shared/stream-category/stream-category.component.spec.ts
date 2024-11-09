import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StreamCategoryComponent } from './stream-category.component';

describe('StreamCategoryComponent', () => {
  let component: StreamCategoryComponent;
  let fixture: ComponentFixture<StreamCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StreamCategoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StreamCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
