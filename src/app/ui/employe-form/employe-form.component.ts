import { Component, EventEmitter, Output } from '@angular/core';
import { Employe } from 'src/app/models/employe.model';

@Component({
  selector: 'app-employe-form',
  templateUrl: './employe-form.component.html',
  styleUrls: ['./employe-form.component.scss']
})
export class EmployeFormComponent {
  @Output() employeOutput = new EventEmitter<Employe>()

  ajouter() : void {
    this.employeOutput.emit(this.newEmploye)
    this.newEmploye = {
      id : 0,
      nomPrenom : "",
      poste : "",
      departement : ""
    }
  }
  newEmploye : Employe = {
    id : 0,
    nomPrenom : "",
    poste : "",
    departement : ""
  }
}
