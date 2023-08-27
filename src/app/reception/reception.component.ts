import { Component } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-reception',
  templateUrl: './reception.component.html',
  styleUrls: ['./reception.component.scss']
})
export class ReceptionComponent {
  constructor(private ajouter:Router){}
  ajouterproduit(){
    this.ajouter.navigateByUrl('ajoutProduit')
  }
}
