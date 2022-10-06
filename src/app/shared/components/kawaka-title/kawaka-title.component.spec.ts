import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KawakaTitleComponent } from './kawaka-title.component';

describe('KawakaTitleComponent', () => {
  let component: KawakaTitleComponent;
  let fixture: ComponentFixture<KawakaTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KawakaTitleComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KawakaTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
