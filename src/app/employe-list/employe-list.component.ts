import { Component } from '@angular/core';
import { Employe } from '../models/employe.model';
import Swal from 'sweetalert2';
import { MaLogiqueMetierService } from '../services/ma-logique-metier.toto';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-employe-list',
  templateUrl: './employe-list.component.html',
  styleUrls: ['./employe-list.component.scss']
})
export class EmployeListComponent {

  constructor(private maLogiqueMetierService : MaLogiqueMetierService){}

  addEmploye(employe : Employe) : void {
    this.maLogiqueMetierService.addEmploye(employe)
  }

  archive(employe : Employe) : void {
    this.maLogiqueMetierService.archive(employe)
  }

  active(employe : Employe) : void {
    this.maLogiqueMetierService.active(employe)
  }

  delete(employe : Employe) : void {
    
    this.maLogiqueMetierService.delete(employe)
  }

  display(employe : Employe) : void {
    
    this.maLogiqueMetierService.display(employe)
  }

  employeListArchived : Observable<Employe[]>  = this.maLogiqueMetierService.employeListArchived

  employeListActived : Observable<Employe[]> = this.maLogiqueMetierService.employeListActived

}
