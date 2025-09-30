import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeListOldWayComponent } from './employe-list-old-way/employe-list-old-way.component';
import { EmployeListComponent } from './employe-list/employe-list.component';

const routes: Routes = [
  
  { path: '', component: EmployeListComponent },
  
  { path: 'w', component: EmployeListOldWayComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
