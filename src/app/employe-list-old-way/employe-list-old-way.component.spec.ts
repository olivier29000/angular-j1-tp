import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeListOldWayComponent } from './employe-list-old-way.component';

describe('EmployeListOldWayComponent', () => {
  let component: EmployeListOldWayComponent;
  let fixture: ComponentFixture<EmployeListOldWayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeListOldWayComponent]
    });
    fixture = TestBed.createComponent(EmployeListOldWayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
