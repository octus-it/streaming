import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarWithoutbgComponent } from './navbar-withoutbg.component';

describe('NavbarWithoutbgComponent', () => {
  let component: NavbarWithoutbgComponent;
  let fixture: ComponentFixture<NavbarWithoutbgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarWithoutbgComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarWithoutbgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
