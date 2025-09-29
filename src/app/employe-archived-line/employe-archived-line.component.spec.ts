import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeArchivedLineComponent } from './employe-archived-line.component';

describe('EmployeArchivedLineComponent', () => {
  let component: EmployeArchivedLineComponent;
  let fixture: ComponentFixture<EmployeArchivedLineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeArchivedLineComponent]
    });
    fixture = TestBed.createComponent(EmployeArchivedLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
