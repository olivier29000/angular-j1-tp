import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonActiveComponent } from './button-active.component';

describe('ButtonActiveComponent', () => {
  let component: ButtonActiveComponent;
  let fixture: ComponentFixture<ButtonActiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonActiveComponent]
    });
    fixture = TestBed.createComponent(ButtonActiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
