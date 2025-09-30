import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeListComponent } from './employe-list/employe-list.component';
import { EmployeActifLineComponent } from './employe-actif-line/employe-actif-line.component';
import { EmployeArchivedLineComponent } from './employe-archived-line/employe-archived-line.component';
import { ButtonDisplayComponent } from './ui/button-display/button-display.component';
import { ButtonArchiveComponent } from './ui/button-archive/button-archive.component';
import { ButtonActiveComponent } from './ui/button-active/button-active.component';
import { ButtonDeleteComponent } from './ui/button-delete/button-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeListComponent,
    EmployeActifLineComponent,
    EmployeArchivedLineComponent,
    ButtonDisplayComponent,
    ButtonArchiveComponent,
    ButtonActiveComponent,
    ButtonDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
