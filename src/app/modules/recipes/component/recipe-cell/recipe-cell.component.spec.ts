import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeCellComponent } from './recipe-cell.component';

describe('RecipeCellComponent', () => {
  let component: RecipeCellComponent;
  let fixture: ComponentFixture<RecipeCellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeCellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
