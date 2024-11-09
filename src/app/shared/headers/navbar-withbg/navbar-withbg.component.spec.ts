import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarWithbgComponent } from './navbar-withbg.component';

describe('NavbarWithbgComponent', () => {
  let component: NavbarWithbgComponent;
  let fixture: ComponentFixture<NavbarWithbgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarWithbgComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarWithbgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
