import { Component } from '@angular/core';
import { Employe } from '../models/employe.model';
import { MaLogiqueMetierWrongService } from '../services/ma-logique-metier-wrong.service';

@Component({
  selector: 'app-employe-list-old-way',
  templateUrl: './employe-list-old-way.component.html',
  styleUrls: ['./employe-list-old-way.component.scss']
})
export class EmployeListOldWayComponent {

  constructor(private maLogiqueMetierWrongService : MaLogiqueMetierWrongService) {}

  addEmploye(employe : Employe) : void {
    this.maLogiqueMetierWrongService.addEmploye(employe)
  }

  archive(employe : Employe) : void {
    this.maLogiqueMetierWrongService.archive(employe)
  }

  active(employe : Employe) : void {
    this.maLogiqueMetierWrongService.active(employe)
  }

  delete(employe : Employe) : void {
    this.maLogiqueMetierWrongService.delete(employe)
  }

  display(employe : Employe) : void {
    this.maLogiqueMetierWrongService.display(employe)
  }

  employeListArchived : Employe[] = this.maLogiqueMetierWrongService.employeListArchived

  employeListActived : Employe[] =this.maLogiqueMetierWrongService.employeListActived


}
