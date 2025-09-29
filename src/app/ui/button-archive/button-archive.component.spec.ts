import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonArchiveComponent } from './button-archive.component';

describe('ButtonArchiveComponent', () => {
  let component: ButtonArchiveComponent;
  let fixture: ComponentFixture<ButtonArchiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonArchiveComponent]
    });
    fixture = TestBed.createComponent(ButtonArchiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
