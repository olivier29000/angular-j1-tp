import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-button-active',
  templateUrl: './button-active.component.html',
  styleUrls: ['./button-active.component.scss']
})
export class ButtonActiveComponent {

  @Output() actionOutput = new EventEmitter<void>()

  action() : void {
    this.actionOutput.emit()
  }

}
