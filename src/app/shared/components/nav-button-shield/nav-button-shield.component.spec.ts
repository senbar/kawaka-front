import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavButtonShieldComponent } from './nav-button-shield.component';

describe('NavButtonShieldComponent', () => {
  let component: NavButtonShieldComponent;
  let fixture: ComponentFixture<NavButtonShieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavButtonShieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavButtonShieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
