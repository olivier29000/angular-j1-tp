import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeActifLineComponent } from './employe-actif-line.component';

describe('EmployeActifLineComponent', () => {
  let component: EmployeActifLineComponent;
  let fixture: ComponentFixture<EmployeActifLineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeActifLineComponent]
    });
    fixture = TestBed.createComponent(EmployeActifLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
