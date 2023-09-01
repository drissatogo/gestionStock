import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-liste-client',
  templateUrl: './liste-client.component.html',
  styleUrls: ['./liste-client.component.scss']
})
export class ListeClientComponent  {
  
  clients: any[] = [];
  addcustom: any;
   
 pourAjouterClient(){
  this.addcustom.navigateByUrl('addcustom/')
 }
}

