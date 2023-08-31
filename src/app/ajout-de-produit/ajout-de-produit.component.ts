import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProduitService } from '../service/produit.service';


@NgModule({
  imports: [
    // ...
    FormsModule
  ],
  // ...
})
export class AppModule { }
@Component({
  selector: 'app-ajout-de-produit',
  templateUrl: './ajout-de-produit.component.html',
  styleUrls: ['./ajout-de-produit.component.scss'],
  template:'    <button (click)="addNewProduct()">Ajouter</button>'
})
export class AjoutDeProduitComponent {
  id: number = 0;
  fournisseur: string = '';
  entrepot: string = '';
  date_de_reception: Date = new Date();
  nom: string = '';
  categorie: string = '';
  quantite: number = 0;
  prix: number = 0;
  selectedImage: any;
  constructor(private router: Router,private versetat: Router, private produitService : ProduitService) {}
  // Méthode pour ajouter un produit à la liste
  onSubmit(): void {
    
    const prixFormatte = (+this.prix).toLocaleString('fr-FR', { style: 'currency', currency: 'XOF' });
    
    const nouveauProduit = {

      id:this.id,
      fournisseur:this.fournisseur,
      entrepot:this.entrepot,
      date_de_reception:this.date_de_reception,
      nom:this.nom,
      categorie:this.categorie,
      quantite:this.quantite,
      prix: prixFormatte,
      // prix: `${this.prix} FCFA`, 
      iconeSuppression: '<i class="fa-solid fa-trash"></i>',
      iconeModification: '<i class="fa-solid fa-pen-to-square"></i>'
    };
  
    // Ajouter le nouveauProduit à la liste des produits
    this.produitService.addProduit(nouveauProduit);
    // Redirige vers la liste des produits.
    this.versetat.navigateByUrl('/etat');

  }
  quantiteConforme(): boolean {
    return this.quantite > 0 && !isNaN(this.quantite);
  }


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
