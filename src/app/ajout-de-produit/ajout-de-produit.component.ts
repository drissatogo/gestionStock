import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajout-de-produit',
  templateUrl: './ajout-de-produit.component.html',
  styleUrls: ['./ajout-de-produit.component.scss']
})
export class AjoutDeProduitComponent {
  constructor(private gohome:Router){}
  vershome(){
    this.gohome.navigateByUrl('gohome')
  }
  selectedImage: any;

  handleFileInput(event: any): void {
    const file = event.target.files[0];
    
    if (file) {
      const reader = new FileReader();
      
      reader.onload = (e: any) => {
        this.selectedImage = e.target.result;
      };
      
      reader.readAsDataURL(file);
    }
  }
}
