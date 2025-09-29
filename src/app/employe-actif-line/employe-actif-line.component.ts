import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Employe } from '../models/employe.model';

@Component({
  selector: 'app-employe-actif-line',
  templateUrl: './employe-actif-line.component.html',
  styleUrls: ['./employe-actif-line.component.scss']
})
export class EmployeActifLineComponent {

  @Input() employe! :Employe;
  @Output() displayOutput = new EventEmitter<Employe>(); 
  @Output() archiveOutput = new EventEmitter<Employe>(); 

  display() : void {
    this.displayOutput.emit(this.employe)
  }
  archive() : void {
    this.archiveOutput.emit(this.employe)
  }
}
