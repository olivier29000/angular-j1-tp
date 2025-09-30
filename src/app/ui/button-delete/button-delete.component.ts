import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-button-delete',
  templateUrl: './button-delete.component.html',
  styleUrls: ['./button-delete.component.scss']
})
export class ButtonDeleteComponent {
@Output() actionOutput = new EventEmitter<void>()

  action() : void {
    this.actionOutput.emit()
  }
}
