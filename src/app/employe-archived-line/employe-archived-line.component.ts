import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Employe } from '../models/employe.model';

@Component({
  selector: 'app-employe-archived-line',
  templateUrl: './employe-archived-line.component.html',
  styleUrls: ['./employe-archived-line.component.scss']
})
export class EmployeArchivedLineComponent {

  @Input() employe! :Employe;
  @Output() displayOutput = new EventEmitter<Employe>(); 
  @Output() activeOutput = new EventEmitter<Employe>(); 

   display() : void {
    this.displayOutput.emit(this.employe)
  }
  active() : void {
    this.activeOutput.emit(this.employe)
  }
}
