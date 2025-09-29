import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-button-archive',
  templateUrl: './button-archive.component.html',
  styleUrls: ['./button-archive.component.scss']
})
export class ButtonArchiveComponent {
@Output() actionOutput = new EventEmitter<void>()

  action() : void {
    this.actionOutput.emit()
  }
}
