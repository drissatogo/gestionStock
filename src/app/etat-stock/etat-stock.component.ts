import { Component } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-etat-stock',
  templateUrl: './etat-stock.component.html',
  styleUrls: ['./etat-stock.component.scss']
})
export class EtatStockComponent {
  constructor(private gohome:Router){}
  vershome(){
    this.gohome.navigateByUrl('gohome')
  }
}
