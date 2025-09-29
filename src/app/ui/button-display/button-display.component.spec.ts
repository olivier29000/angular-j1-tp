import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonDisplayComponent } from './button-display.component';

describe('ButtonDisplayComponent', () => {
  let component: ButtonDisplayComponent;
  let fixture: ComponentFixture<ButtonDisplayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonDisplayComponent]
    });
    fixture = TestBed.createComponent(ButtonDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
