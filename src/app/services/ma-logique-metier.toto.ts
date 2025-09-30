import { Injectable } from '@angular/core';
import { Employe } from '../models/employe.model';
import Swal from 'sweetalert2';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root', 
})
export class MaLogiqueMetierService {
  employeListArchived = new BehaviorSubject<Employe[]>([])

  employeListActived = new BehaviorSubject<Employe[]>([
  { id: 1, nomPrenom: 'Alice Dupont', poste: 'Développeuse Frontend', departement: 'Informatique' },
  { id: 2, nomPrenom: 'Jean Martin', poste: 'Manager RH', departement: 'Ressources Humaines' },
  { id: 3, nomPrenom: 'Sophie Leroy', poste: 'Comptable', departement: 'Finance' },
  { id: 4, nomPrenom: 'Thomas Bernard', poste: 'Développeur Backend', departement: 'Informatique' },
  { id: 5, nomPrenom: 'Claire Dubois', poste: 'Chef de projet', departement: 'Informatique' },
  { id: 6, nomPrenom: 'Nicolas Petit', poste: 'Technicien Support', departement: 'Support' },
  { id: 7, nomPrenom: 'Emma Robert', poste: 'Responsable Marketing', departement: 'Marketing' },
  { id: 8, nomPrenom: 'Lucas Fontaine', poste: 'Commercial', departement: 'Ventes' },
  { id: 9, nomPrenom: 'Julie Moreau', poste: 'Assistante Administrative', departement: 'Administration' },
  { id: 10, nomPrenom: 'David Garnier', poste: 'Directeur Général', departement: 'Direction' }
]);
  constructor() { }
  addEmploye(employe : Employe) : void {
    const idList = this.employeListActived.getValue().concat(this.employeListArchived.getValue())
      .map(e => e.id)

    const id = Math.max(...idList) + 1
    this.employeListActived.next(this.employeListActived.getValue().concat({...employe, id}))
  }

  archive(employe : Employe) : void {
    this.employeListActived.next(this.employeListActived.getValue().filter(e => e.id !== employe.id))
    this.employeListArchived.next(this.employeListArchived.getValue().concat(employe))
  }

  active(employe : Employe) : void {
    this.employeListArchived.next(this.employeListArchived.getValue().filter(e => e.id !== employe.id))
    this.employeListActived.next(this.employeListActived.getValue().concat(employe))
  }

  delete(employe : Employe) : void {
    this.employeListArchived.next(this.employeListArchived.getValue().filter(e => e.id !== employe.id))
  }

  display(employe : Employe) : void {
    Swal.fire({
      title: `<strong>${employe.poste}</strong>`,
      icon: "info",
      html: `
        nomPrenom : <b>${employe.nomPrenom}</b>
      `,
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText: `
        <i class="fa fa-thumbs-up"></i> Great!
      `,
      confirmButtonAriaLabel: "Thumbs up, great!",
      cancelButtonText: `
        <i class="fa fa-thumbs-down"> ok </i>
      `,
      cancelButtonAriaLabel: "Thumbs down"
    });
  }

  
}
