import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterLevel2Component } from './footer-level2.component';

describe('FooterLevel2Component', () => {
  let component: FooterLevel2Component;
  let fixture: ComponentFixture<FooterLevel2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterLevel2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterLevel2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
