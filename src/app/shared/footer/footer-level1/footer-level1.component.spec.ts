import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterLevel1Component } from './footer-level1.component';

describe('FooterLevel1Component', () => {
  let component: FooterLevel1Component;
  let fixture: ComponentFixture<FooterLevel1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterLevel1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterLevel1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
