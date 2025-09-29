import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-button-display',
  templateUrl: './button-display.component.html',
  styleUrls: ['./button-display.component.scss']
})
export class ButtonDisplayComponent {
@Output() actionOutput = new EventEmitter<void>()

  action() : void {
    this.actionOutput.emit()
  }
}
